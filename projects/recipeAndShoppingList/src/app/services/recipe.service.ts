import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {Recipe} from "../shared/recipe.model";
import {ShoppingListService} from "./shopping-list.service";
import {map, Subject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RecipeService {

  url: string = 'https://ng-course-recipe-book-90316-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'

  // private recipes: Recipe[] = [
  //   new Recipe("Vanilla pudding", "Delicious", "https://www.thecountrycook.net/wp-content/uploads/2021/03/1st-image-HOMEMADE-VANILLA-PUDDING-scaled.jpg", [new Ingredient("Vanilla", 5), new Ingredient("Sugar", 20)]),
  //   new Recipe( "Paella", "Delectable", "https://www.simplyrecipes.com/thmb/h9rPZtGd2-M8rDDgCgFmh2xI7Og=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-LEAD-VERTICAL-fc5f1e71baa8484cafa1a106ffaa9c23.jpg", [new Ingredient("Rice", 14), new Ingredient("Seafood", 8)])
  // ];

  private recipes: Recipe[] = [];

  recipeChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService, private httpClient: HttpClient) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index]
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice())
  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice())
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
  saveRecipes() {
    this.httpClient.put(this.url, this.recipes).subscribe(
      response => console.log(response)
    )
  }
  fetchRecipes() {
    return this.httpClient.get<Recipe[]>(this.url).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
        })}
      ),
      tap(recipes => this.setRecipes(recipes))
    )
  }
}
