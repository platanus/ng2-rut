"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var rut_helpers_1 = require('rut-helpers');
function validateRutFactory(rutValidate) {
    return function (c) {
        return rutValidate(c.value) ? null : { invalidRut: true };
    };
}
exports.validateRutFactory = validateRutFactory;
var RutValidator = (function () {
    function RutValidator() {
        this.validator = validateRutFactory(rut_helpers_1.rutValidate);
    }
    RutValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    RutValidator.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[validateRut][ngModel],[validateRut][formControl]',
                    providers: [
                        { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return RutValidator; }), multi: true },
                    ],
                },] },
    ];
    /** @nocollapse */
    RutValidator.ctorParameters = function () { return []; };
    return RutValidator;
}());
exports.RutValidator = RutValidator;
