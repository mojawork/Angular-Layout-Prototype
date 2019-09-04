import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridcardsComponent } from './gridcards.component';



@NgModule({
  declarations: [GridcardsComponent],
  exports: [
    GridcardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GridcardsModule { }
