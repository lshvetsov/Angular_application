import { NgModule } from '@angular/core';

import {ShoppingListComponent} from "./shoppingList/shoppingList.component";
import {ShoppingListEditComponent} from "./shoppingList/shoppingListEdit/shopping-list-edit.component";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {AppSharedModule} from "./app-shared.module";

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [AppSharedModule, AppRoutingModule, FormsModule],
  exports: [ShoppingListComponent, ShoppingListEditComponent]
})
export class AppShoppingListModule { }
