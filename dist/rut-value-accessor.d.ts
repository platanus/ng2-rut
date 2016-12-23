import { ControlValueAccessor } from '@angular/forms';
import { ElementRef, Renderer } from '@angular/core';
export declare class RutValueAccessor implements ControlValueAccessor {
    private _renderer;
    private _elementRef;
    constructor(_renderer: Renderer, _elementRef: ElementRef);
    onChange: any;
    onTouched: any;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
