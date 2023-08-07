import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Recipe} from "../recipe.model";
import {RecipeService} from "./recipe.service";
import {Observable} from "rxjs";

@Injectable()
export class RecipeResolverService implements Resolve<Recipe[]>{

  constructor(private recipeService: RecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    return  this.recipeService.getRecipes().length > 0 ? this.recipeService.getRecipes() : this.recipeService.fetchRecipes();
  }

}
