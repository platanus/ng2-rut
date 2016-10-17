import { Directive, ValueProvider, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RutService } from './rut.service';

import { ElementRef, Renderer } from '@angular/core';

const RUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RutValueAccessor),
  multi: true
};

@Directive({
  selector: 'input[formatRut]',
  host: {'(rutChange)': 'onChange($event)'},
  providers: [RUT_VALUE_ACCESSOR, RutService],
})
export class RutValueAccessor implements ControlValueAccessor {
  constructor(
    private rutService: RutService,
    private _renderer: Renderer,
    private _elementRef: ElementRef
    ) { }

  public onChange: any = (_) => { /*Empty*/ }
  public onTouched: any = () => { /*Empty*/ }

  public writeValue(value: any): void {
    let normalizedValue = this.rutService.formatRut(value);
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
  }

  public registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  public registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
