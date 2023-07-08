import {Component, Input} from '@angular/core';
import {RecipeService} from "../../../shared/services/recipe.service";
import {Recipe} from "../../../shared/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  //@ts-ignore
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onClick() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
