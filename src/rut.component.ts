import {Component, Output, EventEmitter } from '@angular/core';
import { RutService } from './rut.service';

@Component({
  selector: 'rut',
  providers: [RutService],
  template: `
    <input type="text"
      class="rut-input"
      [ngModel]="rutValue"
      (ngModelChange)="onChange($event)"
      (focus)="onFocus($event.target.value)"
      (blur)="onBlur($event.target.value)">
  `,
})
export class RutComponent {
  @Output()
  public rutChange: EventEmitter<any>;
  public rutValue: string;
  private srv: RutService;

  constructor(
    rutService: RutService
  ) {
    this.srv = rutService;
    this.rutChange = new EventEmitter();
  }

  public setValue(value: string) {
    this.rutValue = this.srv.formatRut(value);
  }

  public onFocus(value: string) {
    this.rutValue = this.srv.cleanRut(value);
  }

  public onBlur(value: string) {
    this.rutValue = this.srv.formatRut(value);
  }

  public onChange(value: string) {
    this.rutChange.emit(this.srv.cleanRut(value));
  }
}
