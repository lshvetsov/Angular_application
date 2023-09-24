import { NgModule } from '@angular/core';

import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipes/recipe-list/recipe-item/recipe-item.component";
import {AppRoutingModule} from "./app-routing.module";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AppSharedModule} from "./app-shared.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeEditComponent
  ],
  imports: [AppSharedModule, AppRoutingModule, ReactiveFormsModule],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeEditComponent
  ]

})
export class AppRecipesModule { }
