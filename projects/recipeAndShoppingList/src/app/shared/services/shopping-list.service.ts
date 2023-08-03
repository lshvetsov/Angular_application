import {Injectable} from "@angular/core";
import {Ingredient} from "../ingredient.model";
import {Subject} from "rxjs";

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Applies", 5),
    new Ingredient("Tomato", 3),
  ]

  ingredientChanged = new Subject<Ingredient[]>();
  startEdition = new Subject<number>();

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }
  getIngredient(id: number) {
    return this.ingredients[id];
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients);
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteAllIngredients() {
    this.ingredients = [];
    this.ingredientChanged.next(this.ingredients.slice());
  }

}
