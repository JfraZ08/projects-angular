import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadComponent } from './read.component';



@NgModule({
  declarations: [
    ReadComponent
  ],
  imports: [
    CommonModule,
  
  ],
  exports: [
    ReadComponent
  ],
  providers: [],
  bootstrap: []
})
export class ReadModule { }
