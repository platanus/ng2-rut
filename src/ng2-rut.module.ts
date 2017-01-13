import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RutPipe } from './rut.pipe';
import { RutValidator } from './rut.validator';
import { RutDirective } from './rut.directive';
import { RutValueAccessor } from './rut-value-accessor';

export { RutPipe } from './rut.pipe';
export { RutValidator } from './rut.validator';
export { RutDirective } from './rut.directive';

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
    RutValidator,
  ],
  exports: [
    RutPipe,
    RutDirective,
    RutValidator,
    RutValueAccessor,
  ],
})
export class Ng2Rut {}
