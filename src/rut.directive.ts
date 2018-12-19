import {Directive, EventEmitter, Output} from '@angular/core';
import * as rutHelpers from 'rut-helpers';

@Directive({
  selector: '[formatRut]',
  host: {
    '(blur)': 'onBlur($event)',
    '(focus)': 'onFocus($event)',
    '(input)': 'onChange($event)',
  },
})
export class RutDirective {
  @Output() public rutChange: EventEmitter<any>;

  constructor() {
    this.rutChange = new EventEmitter();
  }

  public onFocus(ev: Event) {
    let htmlInputElement: HTMLInputElement = <HTMLInputElement> ev.target;
    htmlInputElement.value = rutHelpers.rutClean(htmlInputElement.value);
  }

  public onBlur(ev: Event) {
    let htmlInputElement: HTMLInputElement = <HTMLInputElement> ev.target;
    htmlInputElement.value = rutHelpers.rutFormat(htmlInputElement.value) || '';
  }

  public onChange(ev: Event) {
    let htmlInputElement: HTMLInputElement = <HTMLInputElement> ev.target;
    this.rutChange.emit(rutHelpers.rutClean(htmlInputElement.value));
  }
}
