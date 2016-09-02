import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { Ng2Rut } from '../../index';
import { BrowserModule  } from '@angular/platform-browser';

@Component({
  selector: 'demo-app',
  template: require<string>('./demo-app.html'),
})
class DemoApp {
  public user: User = new User('Leandro', '30972198');

  public onSubmit(form: any) {
    console.info(form);
  }
}
console.log(Ng2Rut);
@NgModule({
    declarations: [DemoApp],
    imports: [
      BrowserModule,
      FormsModule,
      Ng2Rut,
    ],
    bootstrap: [DemoApp],
})
export class DemoAppModule {}


export class User {
  constructor(public name: string, public rut: string) {}
}

platformBrowserDynamic().bootstrapModule(DemoAppModule, [
]).catch((err: any) => console.error(err));
