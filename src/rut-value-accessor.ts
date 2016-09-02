import { Directive, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RutComponent } from './rut.component';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RutValueAccessor),
  multi: true,
};

@Directive({
  selector: 'rut',
  host: {'(rutChange)': 'onChange($event)'},
  providers: [CUSTOM_VALUE_ACCESSOR],
})
export class RutValueAccessor implements ControlValueAccessor {
  constructor(private host: RutComponent) {}

  public onChange: any = (_) => { /*Empty*/ }
  public onTouched: any = () => { /*Empty*/ }

  public writeValue(value: any): void {
    this.host.setValue(value);
  }

  public registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  public registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
