import { Directive, HostListener } from '@angular/core';
import { RutService } from './rut.service';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[plRut]',
})
export class RutDirective {
  public formattedRut: string;
  public cleanRut: string;
  private srv: RutService;
  private ngControl: NgControl;

  constructor(rutService: RutService, ngControl: NgControl) {
    this.srv = rutService;
    this.ngControl = ngControl;
  }

  public getFormattedRut(value: string) {
    return this.srv.formatRut(value);
  }

  public getCleanRut(value: string) {
    return this.srv.cleanRut(value);
  }

  @HostListener('blur', ['$event.target.value'])
  public onBlur(value: string) {
    this.formattedRut = this.getFormattedRut(value);
    this.cleanRut = this.getCleanRut(value);
    this.ngControl.valueAccessor.writeValue(this.formattedRut);
    this.ngControl.viewToModelUpdate(this.cleanRut);
  }

  @HostListener('focus', ['$event.target.value'])
  public onFocus(value: string) {
    this.cleanRut = this.getCleanRut(value);
    this.ngControl.valueAccessor.writeValue(this.cleanRut);
    this.ngControl.viewToModelUpdate(this.cleanRut);
  }
}
