import { Renderer, ElementRef, EventEmitter } from '@angular/core';
export declare class RutDirective {
    private _elementRef;
    private _renderer;
    rutChange: EventEmitter<any>;
    constructor(_elementRef: ElementRef, _renderer: Renderer);
    onFocus(value: string): void;
    onBlur(value: string): void;
    onChange(value: string): void;
}
