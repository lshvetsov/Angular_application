import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './routing/home/home.component';
import { UsersComponent } from './routing/users/users.component';
import { ServersComponent } from './routing/servers/servers.component';
import { UserComponent } from './routing/users/user/user.component';
import { EditServerComponent } from './routing/servers/edit-server/edit-server.component';
import { ServerComponent } from './routing/servers/server/server.component';
import { ServersService } from './routing/servers/servers.service';
import {ErrorComponent} from "./routing/not-found/error.component";
import {AuthService} from "./routing/guards/auth.service";
import {AuthGuard} from "./routing/guards/auth-guard.service";
import {AppRoutingModule} from "./app-routing.module";
import {CanDeactivateGuardService} from "./routing/guards/can-deactivate-guard.service";
import {ServerResolver} from "./routing/guards/server-resolver.service";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuardService, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
