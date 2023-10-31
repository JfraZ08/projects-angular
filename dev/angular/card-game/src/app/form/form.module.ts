import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';



@NgModule({
  declarations: [FormModule],
  imports: [
    CommonModule,
    FormModule
  ],
  exports: [FormComponent],
  providers: [],
  bootstrap: []
})
export class FormModule { }
