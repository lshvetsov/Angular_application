import { NgModule } from '@angular/core';

import {DropdownDirective} from "./shared/dropdown.directive";
import {EmptyComponent} from "./shared/empty/empty.component";
import {AlertComponent} from "./shared/alert/alert.component";
import {LoadingSpinnerComponent} from "./shared/loading-spinner/loading-spinner.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    DropdownDirective,
    EmptyComponent,
    AlertComponent,
    LoadingSpinnerComponent
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    DropdownDirective,
    EmptyComponent,
    AlertComponent,
    LoadingSpinnerComponent
  ]
})
export class AppSharedModule { }
