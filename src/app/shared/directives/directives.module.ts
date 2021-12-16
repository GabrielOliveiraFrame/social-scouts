import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDirective } from './time.directive';



@NgModule({
  declarations: [
    TimeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeDirective
  ]
})
export class DirectivesModule { }
