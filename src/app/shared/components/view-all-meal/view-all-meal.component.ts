import { Component, OnInit } from '@angular/core';
import { Meal } from '../../models/Meal';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-view-all-meal',
  templateUrl: './view-all-meal.component.html',
  styleUrls: ['./view-all-meal.component.css']
})
export class ViewAllMealComponent implements OnInit {

  mealList: Meal;
  constructor(private mealService : MealService) { }

  ngOnInit(): void {
    this.mealService.getAllMeal().subscribe(data => {
      this.mealList = data ;
    });
  }

}
