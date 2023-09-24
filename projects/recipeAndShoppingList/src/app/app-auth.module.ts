import { NgModule } from '@angular/core';

import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {AuthComponent} from "./auth/auth.component";
import {AppSharedModule} from "./app-shared.module";

@NgModule({
  declarations: [AuthComponent],
  exports: [AuthComponent],
  imports: [AppSharedModule, AppRoutingModule, FormsModule],
})
export class AppAuthModule { }
