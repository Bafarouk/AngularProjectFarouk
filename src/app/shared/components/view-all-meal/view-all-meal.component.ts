import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Meal } from '../../models/Meal';
import { MealService } from '../../services/meal.service';
import { AddMealComponent } from '../add-meal/add-meal.component';

@Component({
  selector: 'app-view-all-meal',
  templateUrl: './view-all-meal.component.html',
  styleUrls: ['./view-all-meal.component.css']
})
export class ViewAllMealComponent implements OnInit {

  mealList: Meal;
  constructor(private mealService : MealService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.mealService.getAllMeal().subscribe(data => {
      this.mealList = data ;
    });
  }

  addMeal(){
    const mealModelAdd : Meal = new Meal();
    const ref = this.modalService.open(AddMealComponent);
    ref.componentInstance.mealModelAdd = mealModelAdd;
  }

}
