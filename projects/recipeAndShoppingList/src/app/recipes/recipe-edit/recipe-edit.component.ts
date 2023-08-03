import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../../shared/services/recipe.service";
import {Ingredient} from "../../shared/ingredient.model";
import {Recipe} from "../../shared/recipe.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  // @ts-ignore
  id: number;
  editMode: boolean = false
  recipeEditForm: FormGroup;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  onSubmit() {
    const recipe = new Recipe(this.recipeEditForm.value['name'], this.recipeEditForm.value['description'],
      this.recipeEditForm.value['imagePath'], this.recipeEditForm.value['ingredients']);

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, recipe)
    } else {
      this.recipeService.addRecipe(recipe)
    }
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onCancel() {
    this.recipeEditForm.reset();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number) {
    // @ts-ignore
    (this.recipeEditForm as FormArray).get('ingredients').removeAt(index);
  }

  get controls() {
    return (this.recipeEditForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredient() {
    let ingredients = (this.recipeEditForm.get('ingredients') as FormArray);
    ingredients.push(new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm() {

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      let recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, [Validators.required]),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }

    this.recipeEditForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'imagePath': new FormControl(recipeImagePath, [Validators.required]),
      'description': new FormControl(recipeDescription, [Validators.required]),
      'ingredients': recipeIngredients
    })
  }

}
