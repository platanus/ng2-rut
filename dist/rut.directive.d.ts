import { RutService } from './rut.service';
import { NgControl } from '@angular/forms';
export declare class RutDirective {
    formattedRut: string;
    cleanRut: string;
    private srv;
    private ngControl;
    constructor(rutService: RutService, ngControl: NgControl);
    getFormattedRut(value: string): string;
    getCleanRut(value: string): string;
    onBlur(value: string): void;
    onFocus(value: string): void;
}
