import { PipeTransform } from '@angular/core';
import { RutService } from './rut.service';
export declare class RutPipe implements PipeTransform {
    private srv;
    constructor(rutService: RutService);
    transform(value: string): string;
}
