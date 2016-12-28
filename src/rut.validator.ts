import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { rutValidate } from 'rut-helpers';

export function validateRutFactory(rutValidate: Function) {
  return (c: FormControl) => {
    return rutValidate(c.value) ? null : { invalidRut: true };
  };
}

@Directive({
  selector: '[validateRut][ngModel],[validateRut][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator), multi: true },
  ],
})
export class RutValidator {
  private validator: Function;

  constructor() {
    this.validator = validateRutFactory(rutValidate);
  }

  public validate(c: FormControl) {
    return this.validator(c);
  }
}
