import { Directive, HostListener, ElementRef} from '@angular/core';
import { RutService } from './rut.service';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[plRut]',
  providers: [RutService]
})
export class RutDirective {
  public formattedRut: string;
  public cleanRut: string;
  private srv: RutService;
  private ngControl: NgControl;
  private el: ElementRef;

  constructor(rutService: RutService, ngControl: NgControl, el: ElementRef) {
    this.srv = rutService;
    this.ngControl = ngControl;
    this.el = el;
  }

}
