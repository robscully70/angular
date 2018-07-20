import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
			'Tasty Schnitzel',
			'A super-tasty Schnitzel - just awesome!',
			'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('Beer', 12),
				new Ingredient('Fench Fries', 110)
				]),
		new Recipe(
			'Big Fat Burger',
			'Gut buster burger, must have beer',
			'http://globomaestro.com/media/uploaded/scoops/miamis-juiciest-bur-1286253679.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('Beer', 12),
				new Ingredient('Fench Fries', 110),
				new Ingredient('Bun', 1),
				new Ingredient('Bacon', 3),
				new Ingredient('Tomato', 1),
				new Ingredient('Mayo', 1)
			]),
	];
	constructor(private slService: ShoppingListService){}
	getRecipes() {
		// use slice() to return a coopy of the array from the service
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}