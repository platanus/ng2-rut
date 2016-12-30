"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var rut_helpers_1 = require('rut-helpers');
var core_2 = require('@angular/core');
var RUT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return RutValueAccessor; }),
    multi: true
};
var RutValueAccessor = (function () {
    function RutValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    RutValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue = rut_helpers_1.rutFormat(value) || '';
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    RutValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    RutValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    RutValueAccessor.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'input[formatRut]',
                    host: {
                        '(rutChange)': 'onChange($event)',
                        '(blur)': 'onTouched($event)'
                    },
                    providers: [RUT_VALUE_ACCESSOR],
                },] },
    ];
    /** @nocollapse */
    RutValueAccessor.ctorParameters = function () { return [
        { type: core_2.Renderer, },
        { type: core_2.ElementRef, },
    ]; };
    return RutValueAccessor;
}());
exports.RutValueAccessor = RutValueAccessor;
