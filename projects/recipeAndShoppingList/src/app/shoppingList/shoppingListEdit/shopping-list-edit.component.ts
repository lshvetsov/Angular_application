import {Component, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shared/services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  //@ts-ignore
  @ViewChild('ingredientName', {static:true}) ingredientNameElement: ElementRef;
  //@ts-ignore
  @ViewChild('ingredientAmount', {static:true}) ingredientAmountElement: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredient() {
    this.shoppingListService.addIngredient(
      new Ingredient(this.ingredientNameElement.nativeElement.value, this.ingredientAmountElement.nativeElement.value)
    )
  }
}
