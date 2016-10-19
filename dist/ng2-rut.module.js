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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var rut_pipe_1 = require('./rut.pipe');
var rut_service_1 = require('./rut.service');
var rut_validator_1 = require('./rut.validator');
var rut_directive_1 = require('./rut.directive');
var rut_value_accessor_1 = require('./rut-value-accessor');
__export(require('./rut.pipe'));
__export(require('./rut.service'));
__export(require('./rut.validator'));
__export(require('./rut.directive'));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    pipes: [rut_pipe_1.RutPipe],
    providers: [rut_service_1.RutService],
    directives: [rut_directive_1.RutDirective],
};
var Ng2Rut = (function () {
    function Ng2Rut() {
    }
    Ng2Rut = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
            ],
            declarations: [
                rut_pipe_1.RutPipe,
                rut_directive_1.RutDirective,
                rut_validator_1.RutValidator,
                rut_value_accessor_1.RutValueAccessor,
            ],
            providers: [
                rut_service_1.RutService,
                rut_validator_1.RutValidator
            ],
            exports: [
                rut_pipe_1.RutPipe,
                rut_directive_1.RutDirective,
                rut_validator_1.RutValidator,
                rut_value_accessor_1.RutValueAccessor
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2Rut);
    return Ng2Rut;
}());
exports.Ng2Rut = Ng2Rut;
