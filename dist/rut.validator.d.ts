import { FormControl } from '@angular/forms';
import { RutService } from './rut.service';
export declare function validateRutFactory(rutService: RutService): (c: FormControl) => {
    invalidRut: boolean;
};
export declare class RutValidator {
    private validator;
    constructor(rutService: RutService);
    validate(c: FormControl): any;
}
