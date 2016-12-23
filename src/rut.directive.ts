import { Directive, Renderer, ElementRef, EventEmitter, Output } from '@angular/core';
import * as rutHelpers from 'rut-helpers';

@Directive({
  selector: 'input[formatRut]',
  host: {
    '(blur)': 'onBlur($event.target.value)',
    '(focus)': 'onFocus($event.target.value)',
    '(input)': 'onChange($event.target.value)',
  }
})
export class RutDirective {
  @Output() rutChange: EventEmitter<any>;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer) {
      this.rutChange = new EventEmitter();
    }

  public onFocus(value:string) {
    let cleanedRut = rutHelpers.rutClean(value);
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', cleanedRut);
  }

  public onBlur(value:string) {
    let formattedRut = rutHelpers.rutFormat(value) || '';
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', formattedRut);
  }

  public onChange(value:string) {
    this.rutChange.emit(rutHelpers.rutClean(value));
  }

}
