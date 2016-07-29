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
var rut_component_1 = require('./rut.component');
var CUSTOM_VALUE_ACCESSOR = new core_1.Provider(forms_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return RutValueAccessor; }), multi: true });
var RutValueAccessor = (function () {
    function RutValueAccessor(host) {
        this.host = host;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    RutValueAccessor.prototype.writeValue = function (value) {
        this.host.setValue(value);
    };
    RutValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    RutValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    RutValueAccessor = __decorate([
        core_1.Directive({
            selector: 'rut',
            host: { '(rutChange)': 'onChange($event)' },
            providers: [CUSTOM_VALUE_ACCESSOR],
        }), 
        __metadata('design:paramtypes', [rut_component_1.RutComponent])
    ], RutValueAccessor);
    return RutValueAccessor;
}());
exports.RutValueAccessor = RutValueAccessor;
