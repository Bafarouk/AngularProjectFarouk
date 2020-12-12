import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../../models/Meal';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-search-meal-by-category',
  templateUrl: './search-meal-by-category.component.html',
  styleUrls: ['./search-meal-by-category.component.css']
})
export class SearchMealByCategoryComponent implements OnInit {


  CategoryId = 0;
  mealList: Meal;

  constructor(private activatedRoute: ActivatedRoute, private mealService : MealService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.CategoryId = data.id;
      console.log(this.CategoryId);

      this.mealService.searchMealCategory(this.CategoryId).subscribe(categoryData => {
        this.mealList = categoryData;
      });
    })

  }

}
