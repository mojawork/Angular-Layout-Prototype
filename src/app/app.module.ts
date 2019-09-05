import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GridcardsModule} from './components/gridcards/gridcards.module';
import {UtilsModule} from "./utils/utils.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GridcardsModule,
        UtilsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
