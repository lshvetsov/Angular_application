import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipes/recipe-list/recipe-item/recipe-item.component";
import {ShoppingListComponent} from "./shoppingList/shoppingList.component";
import {ShoppingListEditComponent} from "./shoppingList/shoppingListEdit/shopping-list-edit.component";
import {DropdownDirective} from "./shared/dropdown.directive";
import {ShoppingListService} from "./shared/services/shopping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import {EmptyComponent} from "./shared/empty/empty.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit..component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    EmptyComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
