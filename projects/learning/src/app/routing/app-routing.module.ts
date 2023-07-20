import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {ServersComponent} from "./servers/servers.component";
import {ServerComponent} from "./servers/server/server.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {ErrorComponent} from "./not-found/error.component";
import {UserComponent} from "./users/user/user.component";
import {AuthGuard} from "./guards/auth-guard.service";
import {CanDeactivateGuardService} from "./guards/can-deactivate-guard.service";
import {ServerResolver} from "./guards/server-resolver.service";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent},
    ]},
  {path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
      {path: ':id/edit', canDeactivate: [CanDeactivateGuardService], component: EditServerComponent}
    ]},
  {path: 'not-found', component: ErrorComponent, data: {message: "Page not found"}},
  {path: '**', redirectTo: '/not-found'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
  })
export class AppRoutingModule {

}
