import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material';

import {HighlightModule} from 'ng-highlight';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    NoopAnimationsModule,
    HighlightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
