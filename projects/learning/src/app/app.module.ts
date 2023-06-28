import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {CockpitComponent} from "./components/cockpit/cockpit.component";
import {ServerElementComponent} from "./components/server-element/server-element.component";


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
