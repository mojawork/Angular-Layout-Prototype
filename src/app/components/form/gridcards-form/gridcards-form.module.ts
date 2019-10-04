import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridcardsFormComponent } from './gridcards-form.component';



@NgModule({
  declarations: [GridcardsFormComponent],
  exports: [
    GridcardsFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GridcardsFormModule { }
