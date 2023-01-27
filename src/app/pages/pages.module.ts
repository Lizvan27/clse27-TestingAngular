import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponetsModule } from '../componets/componets.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponetsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }
