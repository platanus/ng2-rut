import { ControlValueAccessor } from '@angular/forms';
import { RutService } from './rut.service';
import { ElementRef, Renderer } from '@angular/core';
export declare class RutValueAccessor implements ControlValueAccessor {
    private rutService;
    private _renderer;
    private _elementRef;
    constructor(rutService: RutService, _renderer: Renderer, _elementRef: ElementRef);
    onChange: any;
    onTouched: any;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
