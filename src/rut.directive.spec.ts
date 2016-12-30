import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { RutDirective } from './rut.directive';
import { newEvent } from '../testing';

@Component({
  template: `
    <input formatRut>
  `,
})
class TestComponent { }

describe('RutDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let input: DebugElement;
  let component: Component;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [RutDirective, TestComponent],
    })
      .createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    input = fixture.debugElement.query(By.directive(RutDirective));
  });

  it('should format on blur', () => {
    let nativeInput: HTMLInputElement = input.nativeElement;
    nativeInput.value = '7618285K';
    nativeInput.dispatchEvent(newEvent('blur'));
    fixture.detectChanges();
    expect(nativeInput.value).toBe('7.618.285-K');
  });

  it('should clear formatting on focus', () => {
    let nativeInput: HTMLInputElement = input.nativeElement;
    nativeInput.value = '7.618.285-K';
    nativeInput.dispatchEvent(newEvent('focus'));
    fixture.detectChanges();
    expect(nativeInput.value).toBe('7618285K');
  });
});
