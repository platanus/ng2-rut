import { Directive, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { rutFormat } from 'rut-helpers';

import { ElementRef, Renderer2 } from '@angular/core';

const RUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RutValueAccessor),
  multi: true,
};

@Directive({
  selector: 'input[formatRut]',
  host: {
    '(rutChange)': 'onChange($event)',
    '(blur)': 'onTouched($event)',
  },
  providers: [RUT_VALUE_ACCESSOR],
})
export class RutValueAccessor implements ControlValueAccessor {
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    ) { }

  public onChange: any = (_) => { /*Empty*/ };
  public onTouched: any = () => { /*Empty*/ };

  public writeValue(value: any): void {
    let normalizedValue: string = rutFormat(value) || '';
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
  }

  public registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  public registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
