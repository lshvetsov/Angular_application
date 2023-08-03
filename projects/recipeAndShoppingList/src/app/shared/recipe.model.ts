import {Ingredient} from "./ingredient.model";

export class Recipe {

  constructor(name: string, description: string, imagePath:string, ingredients:Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath= imagePath;
    this.ingredients = ingredients;
  }

  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[]

}
