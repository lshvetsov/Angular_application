import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../ingredient.model";
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "./shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(1, "Vanilla pudding", "Delicious", "https://www.thecountrycook.net/wp-content/uploads/2021/03/1st-image-HOMEMADE-VANILLA-PUDDING-scaled.jpg", [new Ingredient("Vanilla", 5), new Ingredient("Sugar", 20)]),
    new Recipe(2, "Paella", "Delectable", "https://www.simplyrecipes.com/thmb/h9rPZtGd2-M8rDDgCgFmh2xI7Og=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-LEAD-VERTICAL-fc5f1e71baa8484cafa1a106ffaa9c23.jpg", [new Ingredient("Rice", 14), new Ingredient("Seafood", 8)])
  ];

  recipeSelected = new EventEmitter<Recipe>;

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    // @ts-ignore
    return this.recipes.find(recipe => recipe.id === id)
  }
  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
