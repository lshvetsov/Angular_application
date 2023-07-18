import {Injectable} from "@angular/core";
import {Ingredient} from "../ingredient.model";
import {Subject} from "rxjs";

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Applies", 5),
    new Ingredient("Tomato", 3),
  ]

  ingredientAdded = new Subject<Ingredient[]>()

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients);
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients);
  }

}
