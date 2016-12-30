"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var rut_pipe_1 = require('./rut.pipe');
var rut_validator_1 = require('./rut.validator');
var rut_directive_1 = require('./rut.directive');
var rut_value_accessor_1 = require('./rut-value-accessor');
var rut_pipe_2 = require('./rut.pipe');
exports.RutPipe = rut_pipe_2.RutPipe;
var rut_validator_2 = require('./rut.validator');
exports.RutValidator = rut_validator_2.RutValidator;
var rut_directive_2 = require('./rut.directive');
exports.RutDirective = rut_directive_2.RutDirective;
var Ng2Rut = (function () {
    function Ng2Rut() {
    }
    Ng2Rut.decorators = [
        { type: core_1.NgModule, args: [{
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
                        rut_validator_1.RutValidator,
                    ],
                    exports: [
                        rut_pipe_1.RutPipe,
                        rut_directive_1.RutDirective,
                        rut_validator_1.RutValidator,
                        rut_value_accessor_1.RutValueAccessor,
                    ],
                },] },
    ];
    /** @nocollapse */
    Ng2Rut.ctorParameters = function () { return []; };
    return Ng2Rut;
}());
exports.Ng2Rut = Ng2Rut;
