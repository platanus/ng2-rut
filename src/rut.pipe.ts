import { Pipe, PipeTransform } from '@angular/core';
import { RutService } from './rut.service';

@Pipe({
  name: 'rut',
})
export class RutPipe implements PipeTransform {
  private srv: RutService;

  constructor(
    rutService: RutService
  ) {
    this.srv = rutService;
  }

  public transform(value: string): string {
    return this.srv.formatRut(value);
  }
}
