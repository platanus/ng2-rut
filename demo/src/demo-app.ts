import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { RutComponent, RutPipe, RutValidator, RutDirective } from '../../src/ng2-rut';

@Component({
  selector: 'demo-app',
  template: require<string>('./demo-app.html'),
  directives: [RutComponent, RutValidator, RutDirective],
  pipes: [RutPipe],
})
class DemoApp {
  public user: User = new User('Leandro', '30972198');

  public onSubmit(form: any) {
    console.info(form);
  }
}

export class User {
  constructor(public name: string, public rut: string) {}
}

bootstrap(DemoApp, [
  disableDeprecatedForms(),
  provideForms(),
]).catch((err: any) => console.error(err));
