import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridcardsFormComponent } from './gridcards-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxsFormPluginModule} from '@ngxs/form-plugin';

@NgModule({
  declarations: [GridcardsFormComponent],
  exports: [
    GridcardsFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxsFormPluginModule
  ]
})
export class GridcardsFormModule { }
