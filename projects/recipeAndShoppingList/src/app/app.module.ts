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
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RecipeService} from "./shared/services/recipe.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthComponent} from "./auth/auth.component";
import {AuthService} from "./shared/services/auth.service";
import {RecipeResolverService} from "./shared/services/recipe-resolver.service";
import {LoadingSpinnerComponent} from "./shared/loading-spinner/loading-spinner.component";
import {TokenInterceptorService} from "./shared/http/token-interceptor.service";

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
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [ShoppingListService, RecipeService, AuthService, RecipeResolverService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
