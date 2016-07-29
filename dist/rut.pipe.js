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
var RutPipe = (function () {
    function RutPipe(rutService) {
        this.srv = rutService;
    }
    RutPipe.prototype.transform = function (value) {
        return this.srv.formatRut(value);
    };
    RutPipe = __decorate([
        core_1.Pipe({
            name: 'rut',
        }), 
        __metadata('design:paramtypes', [rut_service_1.RutService])
    ], RutPipe);
    return RutPipe;
}());
exports.RutPipe = RutPipe;
