import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../../models/Meal';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-view-meal',
  templateUrl: './view-meal.component.html',
  styleUrls: ['./view-meal.component.css']
})
export class ViewMealComponent implements OnInit {

  mealId=0; 
  meal : Meal;

  constructor(private activatedRoute: ActivatedRoute , private mealService : MealService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.mealId = data.id;

      this.mealService.getMeal(this.mealId).subscribe( mealData => {
        this.meal = mealData;
        console.log(this.meal);
      })
    });
  }

}
