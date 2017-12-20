import { Directive, Renderer2, ElementRef, EventEmitter, Output } from '@angular/core';
import * as rutHelpers from 'rut-helpers';

@Directive({
  selector: 'input[formatRut]',
  host: {
    '(blur)': 'onBlur($event.target.value)',
    '(focus)': 'onFocus($event.target.value)',
    '(input)': 'onChange($event.target.value)',
  },
})
export class RutDirective {
  @Output() public rutChange: EventEmitter<any>;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {
      this.rutChange = new EventEmitter();
    }

  public onFocus(value: string) {
    let cleanedRut: string = rutHelpers.rutClean(value);
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', cleanedRut);
  }

  public onBlur(value: string) {
    let formattedRut: string = rutHelpers.rutFormat(value) || '';
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', formattedRut);
  }

  public onChange(value: string) {
    this.rutChange.emit(rutHelpers.rutClean(value));
  }
}
