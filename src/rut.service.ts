import { Injectable } from '@angular/core';

@Injectable()
export class RutService {
  public cleanRut(value: string) {
    return typeof value === 'string' ? value.replace(/[^0-9kK]+/g, '').toUpperCase() : '';
  }

  public formatRut(value: string) {
    value = this.cleanRut(value);

    if (!value) { return; }
    if (value.length <= 1) { return value; }

    let result: string = value.slice(-4, -1) + '-' + value.substr(value.length - 1);
    for (let i: number = 4; i < value.length; i += 3) {
      result = value.slice(-3 - i, -i) + '.' + result;
    }
    return result;
  }

  public validateRut(value: string) {
    if (typeof value !== 'string') { return false; }
    let t: number = parseInt(value.slice(0, -1), 10);
    let m: number = 0;
    let s: number = 1;

    while (t > 0) {
      s = (s + t % 10 * (9 - m++ % 6)) % 11;
      t = Math.floor(t / 10);
    }

    let v: string = (s > 0) ? (s - 1) + '' : 'K';
    return (v === value.slice(-1));
  }
}
