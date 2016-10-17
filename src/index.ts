import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RutPipe } from './rut.pipe';
import { RutService } from './rut.service';
import { RutDirective } from './rut.directive';
import { RutValueAccessor } from './rut-value-accessor';
import { RutValidator, validateRutFactory } from './rut.validator';

export * from './rut.pipe';
export * from './rut.service';
export * from './rut.directive';
export * from './rut-value-accessor';
export * from './rut.validator';

// for angular-cli
export default {
    pipes: [RutPipe],
    providers: [RutService],
    directives: [RutDirective],
};

@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    RutPipe,
    RutDirective,
    RutValueAccessor,
    RutValidator,
  ],
  providers: [
    RutService,
  ],
  exports: [
    RutPipe,
    RutDirective,
    RutValueAccessor,
    RutValidator,
  ],
})
export class Ng2Rut {}