import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Ng2Rut } from '../../src';
import { RutValidator } from '../../src';

import { DemoAppComponent } from './demo-app.component'

@NgModule({
  declarations: [
    DemoAppComponent,
  ],
  providers: [RutValidator],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Rut
  ],
  bootstrap: [DemoAppComponent],
})
class DemoAppModule { }

platformBrowserDynamic().bootstrapModule(DemoAppModule)
.catch((err: any) => console.error(err));