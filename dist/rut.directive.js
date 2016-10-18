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
var RutDirective = (function () {
    function RutDirective(rutService, _elementRef, _renderer) {
        this.rutService = rutService;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.rutChange = new core_1.EventEmitter();
    }
    RutDirective.prototype.onFocus = function (value) {
        var cleanedRut = this.rutService.cleanRut(value);
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', cleanedRut);
    };
    RutDirective.prototype.onBlur = function (value) {
        var formattedRut = this.rutService.formatRut(value) || '';
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', formattedRut);
    };
    RutDirective.prototype.onChange = function (value) {
        this.rutChange.emit(this.rutService.cleanRut(value));
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], RutDirective.prototype, "rutChange", void 0);
    RutDirective = __decorate([
        core_1.Directive({
            selector: 'input[formatRut]',
            providers: [rut_service_1.RutService],
            host: {
                '(blur)': 'onBlur($event.target.value)',
                '(focus)': 'onFocus($event.target.value)',
                '(input)': 'onChange($event.target.value)',
            }
        }), 
        __metadata('design:paramtypes', [rut_service_1.RutService, core_1.ElementRef, core_1.Renderer])
    ], RutDirective);
    return RutDirective;
}());
exports.RutDirective = RutDirective;
