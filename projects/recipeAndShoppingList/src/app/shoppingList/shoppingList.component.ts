import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../services/shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shoppingList.component.html',
  styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];
  // @ts-ignore
  shoppingListSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  onIngredientAdd(event: Ingredient) {
    this.shoppingListService.addIngredient(event);
  }
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListSubscription = this.shoppingListService.ingredientChanged.subscribe(
      ingredients => this.ingredients = ingredients
    )
  }
  ngOnDestroy(): void {
    this.shoppingListSubscription.unsubscribe();
  }
  onEditElement(id: number) {
    this.shoppingListService.startEdition.next(id);
  }
}
