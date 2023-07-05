import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {CockpitComponent} from "./components/cockpit/cockpit.component";
import {ServerElementComponent} from "./components/server-element/server-element.component";
import {GameControlComponent} from "./components/assignment/game-control/game-control.component";
import {OddComponent} from "./components/assignment/odd/odd.component";
import {EvenComponent} from "./components/assignment/even/even.component";


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
