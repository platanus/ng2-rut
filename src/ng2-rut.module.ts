import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RutComponent } from './rut.component';
import { RutPipe } from './rut.pipe';
import { RutService } from './rut.service';
import { RutValidator } from './rut.validator';
import { RutValueAccessor } from './rut-value-accessor';
import { RutDirective } from './rut.directive';

export * from './rut.component';
export * from './rut.pipe';
export * from './rut.service';
export * from './rut.validator';
export * from './rut-value-accessor';
export * from './rut.directive';

// for angular-cli
export default {
    pipes: [RutPipe],
    providers: [RutService, RutValueAccessor],
    directives: [RutComponent, RutDirective],
};


@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    RutComponent,
    RutDirective,
    RutPipe,
    RutValidator,
    RutValueAccessor,
  ],
  providers: [
    RutService,
  ],
  exports: [
    RutPipe,
    RutComponent,
    RutDirective,
    RutValidator,
    RutValueAccessor,
  ],
})
export class Ng2Rut {
  constructor() {
    console.log('hola')
  }
}