import { ControlValueAccessor } from '@angular/forms';
import { RutComponent } from './rut.component';
export declare class RutValueAccessor implements ControlValueAccessor {
    private host;
    constructor(host: RutComponent);
    onChange: any;
    onTouched: any;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
