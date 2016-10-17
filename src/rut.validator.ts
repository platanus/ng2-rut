import { Directive, forwardRef, Inject } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { RutService } from './rut.service';

export function validateRutFactory(rutService: RutService) {
  return (c: FormControl) => {
    return rutService.validateRut(c.value) ? null : { invalidRut: true };
  };
}

@Directive({
  selector: '[validateRut][ngModel],[validateRut][formControl]',
  providers: [
    RutService,
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator), multi: true },
  ],
})
export class RutValidator {
  private validator: Function;

  constructor(
    rutService: RutService
  ) {
    this.validator = validateRutFactory(rutService);
  }

  public validate(c: FormControl) {
    return this.validator(c);
  }
}
