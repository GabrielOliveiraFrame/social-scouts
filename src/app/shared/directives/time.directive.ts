import { Directive, HostListener, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as StringMask from 'string-mask';

@Directive({
  selector: '[timeMask]'
})
export class TimeDirective {

  private delete: boolean = false;
  private timeMask!: any;

  constructor() {
    this.timeMask = new StringMask('90:00');
  }

  @Input()
  control!: AbstractControl | null;

  @HostListener('input')
  onChange(): void{
    this.transform(this.control?.value);
  }

  @HostListener('keydown.backspace')
  deletePress() {
    this.delete = true;
  }

  @HostListener('keyup.backspace')
  deleteUp() {
    this.delete = false;
  }

  transform(value: string): void {

    if(!this.delete){
      value = value.replace(/[^0-9]/g, '');
      let result = this.timeMask.apply(value);
      this.control?.setValue(result);
    }
  }

}
