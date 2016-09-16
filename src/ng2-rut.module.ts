import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RutPipe } from './rut.pipe';
import { RutService } from './rut.service';
import { validateRutFactory, RutValidator } from './rut.validator';
import { RutDirective } from './rut.directive';

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
    RutDirective,
    RutPipe,
  ],
  providers: [
    RutService,
  ],
  exports: [
    RutPipe,
    RutDirective
  ],
})
export class Ng2Rut {}