import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcuComponent } from './calcu/calcu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalcuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CalcuComponent
  ]
})
export class ComponetsModule { }
