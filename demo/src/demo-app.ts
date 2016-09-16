import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Ng2Rut, RutValidator} from '../../src/ng2-rut.module';
import { BrowserModule  } from '@angular/platform-browser';

@Component({
  selector: 'demo-app',
  template: require<string>('./demo-app.html'),
  providers: [RutValidator],
})
class DemoApp {
  public userReactiveForm: any;
  constructor(fb: FormBuilder, rv: RutValidator) {
    console.log(RutValidator);
    this.userReactiveForm = fb.group({
      'rut': ['164451429', rv.validate]
    });
  }
  public user: User = new User('Leandro', '30972198');

  public onSubmit(form: any) {
    console.info(form);
  }
}

@NgModule({
    declarations: [DemoApp],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
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
