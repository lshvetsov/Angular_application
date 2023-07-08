import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shared/services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shoppingList.component.html',
  styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent implements OnInit{

  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  onIngredientAdd(event: Ingredient) {
    this.shoppingListService.addIngredient(event);
  }
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientAdded.subscribe(
      ingredients => {
        this.ingredients = ingredients;
      }
    )
  }

}
