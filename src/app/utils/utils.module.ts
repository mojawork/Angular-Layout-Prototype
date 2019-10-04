import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediascreenComponent } from './mediascreen/mediascreen.component';



@NgModule({
    declarations: [MediascreenComponent],
    exports: [
        MediascreenComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UtilsModule { }
