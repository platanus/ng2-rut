import { FormControl } from '@angular/forms';
export declare function validateRutFactory(rutValidate: Function): (c: FormControl) => {
    invalidRut: boolean;
};
export declare class RutValidator {
    private validator;
    constructor();
    validate(c: FormControl): any;
}
