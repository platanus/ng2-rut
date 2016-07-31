import { RutComponent } from './rut.component';
import { RutService } from './rut.service';
import { it, expect, describe, addProviders, inject, beforeEach} from '@angular/core/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';

describe('RutComponent', () => {
  beforeEach(() => {
    addProviders([
      RutService,
    ]);
  });

  it('sets initial formatted value', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    let fixture = tcb.createSync(RutComponent);
    let compiled = fixture.nativeElement;

    expect(compiled.querySelector('.rut-input').getAttribute('ng-reflect-model')).toBe(null);
    fixture.componentInstance.setValue('30972198');
    fixture.detectChanges();
    expect(compiled.querySelector('.rut-input').getAttribute('ng-reflect-model')).toEqual('3.097.219-8');
  }));

  it('removes format in focus and sets in blur', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    let fixture = tcb.createSync(RutComponent);
    let compiled = fixture.nativeElement;

    fixture.componentInstance.setValue('30972198');
    fixture.detectChanges();
    compiled.querySelector('.rut-input').focus();
    fixture.detectChanges();
    expect(compiled.querySelector('.rut-input').getAttribute('ng-reflect-model')).toEqual('30972198');
    compiled.querySelector('.rut-input').blur();
    fixture.detectChanges();
    expect(compiled.querySelector('.rut-input').getAttribute('ng-reflect-model')).toEqual('3.097.219-8');
  }));
});
