import {Component, Input} from '@angular/core';
import {Recipe} from "../../shared/recipe.model";
import {RecipeService} from "../../shared/services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  //@ts-ignore
  @Input() public recipeDetailed: Recipe

  constructor(private recipeService: RecipeService) {}

  onIngredientsAdd() {
    this.recipeService.addIngredients(this.recipeDetailed.ingredients);
  }

}
