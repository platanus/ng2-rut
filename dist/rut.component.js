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
var RutComponent = (function () {
    function RutComponent(rutService) {
        this.srv = rutService;
        this.rutChange = new core_1.EventEmitter();
    }
    RutComponent.prototype.setValue = function (value) {
        this.rutValue = this.srv.formatRut(value);
    };
    RutComponent.prototype.onFocus = function (value) {
        this.rutValue = this.srv.cleanRut(value);
    };
    RutComponent.prototype.onBlur = function (value) {
        this.rutValue = this.srv.formatRut(value);
    };
    RutComponent.prototype.onChange = function (value) {
        this.rutChange.emit(this.srv.cleanRut(value));
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], RutComponent.prototype, "rutChange", void 0);
    RutComponent = __decorate([
        core_1.Component({
            selector: 'rut',
            providers: [rut_service_1.RutService],
            template: "\n    <input type=\"text\"\n      [ngModel]=\"rutValue\"\n      (ngModelChange)=\"onChange($event)\"\n      (focus)=\"onFocus($event.target.value)\"\n      (blur)=\"onBlur($event.target.value)\">\n  ",
        }), 
        __metadata('design:paramtypes', [rut_service_1.RutService])
    ], RutComponent);
    return RutComponent;
}());
exports.RutComponent = RutComponent;
