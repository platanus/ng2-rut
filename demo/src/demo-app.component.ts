import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RutValidator } from '../../src/rut.validator'

@Component({
  selector: 'demo-app',
  templateUrl: './src/demo-app.component.html',
  providers: [],
})
export class DemoAppComponent {
  public user: User = new User('Leandro', '30972198');
  private reactiveForm: FormGroup;

  constructor (fb:FormBuilder, rv:RutValidator) {
    this.reactiveForm = fb.group({
      rut: ['30972198', [Validators.required, rv]]
    });
  }

  public onSubmit(form: any) {
    console.info(form);
  }
}

export class User {
  constructor(public name: string, public rut: string) {}
}
