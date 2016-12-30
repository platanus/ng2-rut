"use strict";
var core_1 = require('@angular/core');
var rutHelpers = require('rut-helpers');
var RutDirective = (function () {
    function RutDirective(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.rutChange = new core_1.EventEmitter();
    }
    RutDirective.prototype.onFocus = function (value) {
        var cleanedRut = rutHelpers.rutClean(value);
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', cleanedRut);
    };
    RutDirective.prototype.onBlur = function (value) {
        var formattedRut = rutHelpers.rutFormat(value) || '';
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', formattedRut);
    };
    RutDirective.prototype.onChange = function (value) {
        this.rutChange.emit(rutHelpers.rutClean(value));
    };
    RutDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'input[formatRut]',
                    host: {
                        '(blur)': 'onBlur($event.target.value)',
                        '(focus)': 'onFocus($event.target.value)',
                        '(input)': 'onChange($event.target.value)',
                    }
                },] },
    ];
    /** @nocollapse */
    RutDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
    ]; };
    RutDirective.propDecorators = {
        'rutChange': [{ type: core_1.Output },],
    };
    return RutDirective;
}());
exports.RutDirective = RutDirective;
