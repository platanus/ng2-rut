import { FormControl } from '@angular/forms';
import { rutValidate } from 'rut-helpers';
export declare function validateRutFactory(rutValidate: rutValidate): (c: FormControl) => {
    invalidRut: boolean;
};
export declare class RutValidator {
    private validator;
    constructor();
    validate(c: FormControl): any;
}
