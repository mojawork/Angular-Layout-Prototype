import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GridcardsViewComponent} from './gridcards-view.component';

@NgModule({
  declarations: [GridcardsViewComponent],
  exports: [
    GridcardsViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GridcardsViewModule { }
