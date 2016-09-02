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
var rut_service_1 = require('./rut.service');
var forms_1 = require('@angular/forms');
var RutDirective = (function () {
    function RutDirective(rutService, ngControl) {
        this.srv = rutService;
        this.ngControl = ngControl;
    }
    RutDirective.prototype.getFormattedRut = function (value) {
        return this.srv.formatRut(value);
    };
    RutDirective.prototype.getCleanRut = function (value) {
        return this.srv.cleanRut(value);
    };
    RutDirective.prototype.onBlur = function (value) {
        this.formattedRut = this.getFormattedRut(value);
        this.cleanRut = this.getCleanRut(value);
        this.ngControl.valueAccessor.writeValue(this.formattedRut);
        this.ngControl.viewToModelUpdate(this.cleanRut);
    };
    RutDirective.prototype.onFocus = function (value) {
        this.cleanRut = this.getCleanRut(value);
        this.ngControl.valueAccessor.writeValue(this.cleanRut);
        this.ngControl.viewToModelUpdate(this.cleanRut);
    };
    __decorate([
        core_1.HostListener('blur', ['$event.target.value']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', void 0)
    ], RutDirective.prototype, "onBlur", null);
    __decorate([
        core_1.HostListener('focus', ['$event.target.value']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', void 0)
    ], RutDirective.prototype, "onFocus", null);
    RutDirective = __decorate([
        core_1.Directive({
            selector: 'input[plRut]',
            providers: [rut_service_1.RutService],
        }), 
        __metadata('design:paramtypes', [rut_service_1.RutService, forms_1.NgControl])
    ], RutDirective);
    return RutDirective;
}());
exports.RutDirective = RutDirective;
