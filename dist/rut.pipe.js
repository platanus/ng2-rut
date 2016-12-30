"use strict";
var core_1 = require('@angular/core');
var rut_helpers_1 = require('rut-helpers');
var RutPipe = (function () {
    function RutPipe() {
    }
    RutPipe.prototype.transform = function (value) {
        return rut_helpers_1.rutFormat(value);
    };
    RutPipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'rut',
                },] },
    ];
    /** @nocollapse */
    RutPipe.ctorParameters = function () { return []; };
    return RutPipe;
}());
exports.RutPipe = RutPipe;
