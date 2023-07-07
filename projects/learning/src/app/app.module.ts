import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import {AccountsService} from "./services/services/accounts.service";
import {LoggingService} from "./services/services/logging.service";
import {InactiveUsersComponent} from "./services/assignment/inactive-users/inactive-users.component";
import {ActiveUsersComponent} from "./services/assignment/active-users/active-users.component";
import {UsersService} from "./services/services/users.service";
import {CounterService} from "./services/services/counter.service";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountsService, LoggingService, UsersService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
