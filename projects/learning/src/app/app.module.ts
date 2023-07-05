import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {BetterHighlightDirective} from "./directives/custom-directives/better-highlight.directive";
import {BasicHighlightDirective} from "./directives/custom-directives/basic-highlight.directive";
import {UnlessDirective} from "./directives/custom-directives/unless.directive";

@NgModule({
  declarations: [
    AppComponent,
    BetterHighlightDirective,
    BasicHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
