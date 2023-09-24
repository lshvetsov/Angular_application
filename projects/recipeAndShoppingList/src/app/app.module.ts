import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {ShoppingListService} from "./services/shopping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import {RecipeService} from "./services/recipe.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {RecipeResolverService} from "./services/recipe-resolver.service";
import {TokenInterceptorService} from "./shared/http/token-interceptor.service";
import {AppRecipesModule} from "./app-recipes.module";
import {AppShoppingListModule} from "./app-shopping-list.module";
import {AppAuthModule} from "./app-auth.module";
import {AppSharedModule} from "./app-shared.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRecipesModule,
    AppShoppingListModule,
    AppAuthModule,
    AppSharedModule
  ],
  providers: [ShoppingListService, RecipeService, AuthService, RecipeResolverService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
