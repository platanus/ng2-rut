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
var core_2 = require('@angular/core');
var RUT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return RutValueAccessor; }),
    multi: true
};
var RutValueAccessor = (function () {
    function RutValueAccessor(rutService, _renderer, _elementRef) {
        this.rutService = rutService;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    RutValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue = this.rutService.formatRut(value) || '';
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    RutValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    RutValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    RutValueAccessor = __decorate([
        core_1.Directive({
            selector: 'input[formatRut]',
            host: {
                '(rutChange)': 'onChange($event)',
                '(blur)': 'onTouched($event)'
            },
            providers: [RUT_VALUE_ACCESSOR, rut_service_1.RutService],
        }), 
        __metadata('design:paramtypes', [rut_service_1.RutService, core_2.Renderer, core_2.ElementRef])
    ], RutValueAccessor);
    return RutValueAccessor;
}());
exports.RutValueAccessor = RutValueAccessor;
