import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {Recipe} from "../../recipes/recipe.model";
import {Ingredient} from "../../shared/ingredient.model";

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
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddIngredient() {
    this.ingredientAdded.emit(
      new Ingredient(this.ingredientNameElement.nativeElement.value, this.ingredientAmountElement.nativeElement.value)
    )
  }

}
