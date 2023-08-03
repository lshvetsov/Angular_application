import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shoppingList/shoppingList.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {EmptyComponent} from "./shared/empty/empty.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {RecipeResolverService} from "./shared/services/recipe-resolver.service";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: "full"},
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: EmptyComponent, data: {message: "Please select the recipe"}},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
  })
export class AppRoutingModule {

}
