import { EventEmitter } from '@angular/core';
import { RutService } from './rut.service';
export declare class RutComponent {
    rutChange: EventEmitter<any>;
    rutValue: string;
    private srv;
    constructor(rutService: RutService);
    setValue(value: string): void;
    onFocus(value: string): void;
    onBlur(value: string): void;
    onChange(value: string): void;
}
