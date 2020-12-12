import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../../models/Meal';
import { User } from '../../models/User';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-view-meal-by-user',
  templateUrl: './view-meal-by-user.component.html',
  styleUrls: ['./view-meal-by-user.component.css']
})
export class ViewMealByUserComponent implements OnInit {
  user : User;
  userId: number;
  mealList : Meal;
  constructor( private mealService : MealService) { }

  ngOnInit(): void {
    
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.userId = this.user[0].id;
      console.log(this.user);
      console.log(this.userId);
      console.log(this.mealList);
      
      

      this.mealService.getMealByUser(this.userId).subscribe( data =>{
        this.mealList = data;
      });
  }

}
