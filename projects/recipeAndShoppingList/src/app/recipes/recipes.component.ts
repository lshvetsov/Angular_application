import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../shared/services/recipe.service";
import {Recipe} from "../shared/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{
  //@ts-ignore
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      recipe => {
        this.selectedRecipe = recipe;
      }
    )
  }




}
