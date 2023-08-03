import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shared/services/shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  @ViewChild('ingredientForm', {static: false}) ingredientForm: NgForm;
  editElementSubscription: Subscription;
  editMode = false;
  editedElementIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  onSubmit() {
    const ingredient = new Ingredient(this.ingredientForm.value.name, this.ingredientForm.value.amount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedElementIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.editMode = false;
    this.ingredientForm.reset();
  }

  ngOnDestroy(): void {
    this.editElementSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.editElementSubscription = this.shoppingListService.startEdition.subscribe(
      (index:number) => {
        this.editMode = true;
        this.editedElementIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.ingredientForm.setValue({
          "name": this.editedItem.name,
          "amount": this.editedItem.amount
        })
      }
    )
  }
  onClear() {
    this.ingredientForm.reset();
    this.editMode = false;
    this.shoppingListService.deleteAllIngredients();
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedElementIndex);
    this.onClear();
  }
}
