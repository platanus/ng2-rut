import { Renderer, ElementRef, EventEmitter } from '@angular/core';
import { RutService } from './rut.service';
export declare class RutDirective {
    private rutService;
    private _elementRef;
    private _renderer;
    rutChange: EventEmitter<any>;
    constructor(rutService: RutService, _elementRef: ElementRef, _renderer: Renderer);
    onFocus(value: string): void;
    onBlur(value: string): void;
    onChange(value: string): void;
}
