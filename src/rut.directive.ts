import { Directive, Renderer, ElementRef, EventEmitter, Output } from '@angular/core';

import { RutService } from './rut.service';

@Directive({
  selector: 'input[formatRut]',
  providers: [RutService],
  host: {
    '(blur)': 'onBlur($event.target.value)',
    '(focus)': 'onFocus($event.target.value)',
    '(input)': 'onChange($event.target.value)',
  }
})
export class RutDirective {
  @Output() rutChange: EventEmitter<any>;

  constructor(
    private rutService: RutService,
    private _elementRef: ElementRef,
    private _renderer: Renderer) {
      this.rutChange = new EventEmitter();
    }

  public onFocus(value:string) {
    let cleanedRut = this.rutService.cleanRut(value);
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', cleanedRut);
  }

  public onBlur(value:string) {
    let formattedRut = this.rutService.formatRut(value) || '';
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', formattedRut);
  }

  public onChange(value:string) {
    this.rutChange.emit(this.rutService.cleanRut(value));
  }

}
