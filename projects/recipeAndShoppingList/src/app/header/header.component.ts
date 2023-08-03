import {Component} from '@angular/core';
import {RecipeService} from "../shared/services/recipe.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dropdownOpen: boolean = false;

  constructor(private recipeService: RecipeService) {
  }
  onSave(){
    this.recipeService.saveRecipes();
  }
  onFetch(){
    this.recipeService.fetchRecipes().subscribe();
  }

}
