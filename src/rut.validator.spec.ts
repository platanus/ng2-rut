import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormControl, NgModel } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { RutValidator } from './rut.validator';
import { newEvent } from '../testing';

describe('RutValidator: ReactiveForms', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
    });
  });

  let rutValidator: RutValidator = new RutValidator();

  it('should parse valid RUTs as valid', () => {
    let rutControl: FormControl = new FormControl();
    rutControl.setValue('7.618.285-K');
    expect(rutValidator.validate(rutControl)).toBeNull();
  });

  it('should parse invalid RUTs as invalid', () => {
    let rutControl: FormControl = new FormControl();
    rutControl.setValue('1.111.111-1');
    let result: any = rutValidator.validate(rutControl);
    expect(result.invalidRut).toBe(true);
  });

  it('should parse valid RUTs without formatting as valid', () => {
    let rutControl: FormControl = new FormControl();
    rutControl.setValue('7618285K');
    expect(rutValidator.validate(rutControl)).toBeNull();
  });
});

@Component({
  template: `
    <input validateRut [(ngModel)]="user.rut" name="rut">
  `,
})
class TestComponent {
  public user: any = {
    rut: '',
  };
}

describe('RutValidator: TemplateForm', () => {
  let fixture: ComponentFixture<TestComponent>;
  let input: DebugElement;
  let nativeInput: HTMLInputElement;
  let ngModel: NgModel;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [RutValidator, TestComponent],
    })
      .createComponent(TestComponent);
    fixture.detectChanges();
    input = fixture.debugElement.query(By.directive(RutValidator));
    nativeInput = input.nativeElement;
    ngModel = input.injector.get(NgModel);
  });

  it('should parse valid RUTs as valid', () => {
    nativeInput.value = '7.618.285-K';
    nativeInput.dispatchEvent(newEvent('input'));
    fixture.detectChanges();
    expect(ngModel.valid).toBe(true);
  });

  it('should parse invalid RUTs as invalid', () => {
    nativeInput.value = '1.111.111-K';
    nativeInput.dispatchEvent(newEvent('input'));
    fixture.detectChanges();
    expect(ngModel.valid).toBe(false);
  });

  it('should parse valid RUTs without formatting as valid', () => {
    nativeInput.value = '7618285K';
    nativeInput.dispatchEvent(newEvent('input'));
    fixture.detectChanges();
    expect(ngModel.valid).toBe(true);
  });
});
