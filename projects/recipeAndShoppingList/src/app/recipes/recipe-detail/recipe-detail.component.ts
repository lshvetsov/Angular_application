import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../shared/recipe.model";
import {RecipeService} from "../../shared/services/recipe.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @ts-ignore
  public recipeDetailed: Recipe

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

  onIngredientsAdd() {
    this.recipeService.addIngredients(this.recipeDetailed.ingredients);
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.recipeDetailed = this.recipeService.getRecipe(id);

    this.route.params.subscribe((params: Params) => {
      this.recipeDetailed = this.recipeService.getRecipe(+params['id']);
    })
  }

}
