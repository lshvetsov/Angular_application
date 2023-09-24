import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../shared/recipe.model";
import {RecipeService} from "../../services/recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @ts-ignore
  public recipeDetailed: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {}

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetailed.ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeDetailed.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeDetailed = this.recipeService.getRecipe(this.id);
    })
  }

}
