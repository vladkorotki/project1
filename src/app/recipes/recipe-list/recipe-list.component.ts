import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe.png'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe.png'
    ),
  ];

  constructor() {}
  ngOnInit(): void {}
}
