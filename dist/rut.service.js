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
var core_1 = require("@angular/core");
var RutService = (function () {
    function RutService() {
    }
    RutService.prototype.cleanRut = function (value) {
        return typeof value === 'string' ? value.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
    };
    RutService.prototype.formatRut = function (value) {
        value = this.cleanRut(value);
        if (!value) {
            return;
        }
        if (value.length <= 1) {
            return value;
        }
        var result = value.slice(-4, -1) + '-' + value.substr(value.length - 1);
        for (var i = 4; i < value.length; i += 3) {
            result = value.slice(-3 - i, -i) + '.' + result;
        }
        return result;
    };
    RutService.prototype.validateRut = function (value) {
        if (typeof value !== 'string') {
            return false;
        }
        var t = parseInt(value.slice(0, -1), 10);
        var m = 0;
        var s = 1;
        while (t > 0) {
            s = (s + t % 10 * (9 - m++ % 6)) % 11;
            t = Math.floor(t / 10);
        }
        var v = (s > 0) ? (s - 1) + '' : 'K';
        return (v === value.slice(-1));
    };
    return RutService;
}());
RutService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], RutService);
exports.RutService = RutService;
