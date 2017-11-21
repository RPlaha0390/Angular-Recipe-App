import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();

	private recipes: Recipe[] = [
		new Recipe(
			'Hot Dog', 
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
			'https://drscdn.500px.org/photo/69564159/q%3D80_m%3D2000/2cc1e60eeeaeefd6ae47cfab06060fec',
			[
				new Ingredient('Sausage', 1),
				new Ingredient('Mustard', 1),
				new Ingredient('Lettuce', 1),
				new Ingredient('Guacamole', 1)
			]
		),
		new Recipe(
			'Beef Burger', 
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
			'https://upload.wikimedia.org/wikipedia/commons/d/dc/Lounge_Burger_Wiki.jpg',
			[
				new Ingredient('Buns', 1),
				new Ingredient('Beef', 1),
				new Ingredient('Lettuce', 1)
			]
		) 
	];

	constructor(private slService: ShoppingListService) {}

	setRecipes(recipes: Recipe[]) {
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
  	this.recipes[index] = newRecipe;
  	this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
  	this.recipes.splice(index, 1)
  	this.recipesChanged.next(this.recipes.slice());
  }
}