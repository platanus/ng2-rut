import { FormControl } from '@angular/forms';
import { RutService } from './rut.service';
export declare class RutValidator {
    private validator;
    constructor(rutService: RutService);
    validate(c: FormControl): any;
}
