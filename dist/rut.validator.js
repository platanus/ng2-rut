"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var rut_service_1 = require('./rut.service');
function validateRutFactory(rutService) {
    return function (c) {
        return rutService.validateRut(c.value) ? null : {
            validateRut: {
                valid: false,
            },
        };
    };
}
var RutValidator = (function () {
    function RutValidator(rutService) {
        this.validator = validateRutFactory(rutService);
    }
    RutValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    RutValidator = __decorate([
        core_1.Directive({
            selector: '[validateRut][ngModel],[validateRut][formControl]',
            providers: [
                rut_service_1.RutService,
                { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return RutValidator; }), multi: true },
            ],
        }), 
        __metadata('design:paramtypes', [rut_service_1.RutService])
    ], RutValidator);
    return RutValidator;
}());
exports.RutValidator = RutValidator;
