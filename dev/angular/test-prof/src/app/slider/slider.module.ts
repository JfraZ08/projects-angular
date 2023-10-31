import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { HomeComponent } from '../home/home.component';



@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule
  ],
  exports: [SliderComponent],
  providers: [],
  bootstrap: []
})
export class SliderModule { }
