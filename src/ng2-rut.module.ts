import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RutPipe } from './rut.pipe';
import { RutService } from './rut.service';
import { validateRutFactory, RutValidator } from './rut.validator';
import { RutDirective } from './rut.directive';
import { RutValueAccessor } from './rut-value-accessor';

export * from './rut.pipe';
export * from './rut.service';
export * from './rut.validator';
export * from './rut.directive';

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
    RutValidator,
    RutValueAccessor,
  ],
  providers: [
    RutService,
    RutValidator
  ],
  exports: [
    RutPipe,
    RutDirective,
    RutValidator,
    RutValueAccessor
  ],
})
export class Ng2Rut {}