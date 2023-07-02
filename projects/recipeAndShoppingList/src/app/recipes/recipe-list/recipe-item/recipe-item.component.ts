import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  //@ts-ignore
  @Input() recipe: Recipe;

  onClick() {
    this.recipeSelected.emit(this.recipe);
  }

}
