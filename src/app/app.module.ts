import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ServerComponent} from "./server/server.component";
import {FormsModule} from '@angular/forms';
import {ServersComponent} from "./servers/servers.component";
import {WarningComponent} from "./warning-alert/warning.component";
import {SuccessComponent} from "./success-alert/success.component";
import {UsersComponent} from "./users/users.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
