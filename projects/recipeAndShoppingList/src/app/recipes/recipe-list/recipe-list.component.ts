import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe("Vanilla pudding", "Delicious", "https://www.thecountrycook.net/wp-content/uploads/2021/03/1st-image-HOMEMADE-VANILLA-PUDDING-scaled.jpg")
  ];

}
