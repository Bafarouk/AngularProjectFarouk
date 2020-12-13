import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Meal } from '../../models/Meal';
import { User } from '../../models/User';
import { MealService } from '../../services/meal.service';
import { DeleteMealComponent } from '../delete-meal/delete-meal.component';
import { UpdateMealComponent } from '../update-meal/update-meal.component';

@Component({
  selector: 'app-view-meal-by-user',
  templateUrl: './view-meal-by-user.component.html',
  styleUrls: ['./view-meal-by-user.component.css']
})
export class ViewMealByUserComponent implements OnInit {

  closeResult = '';

  user : User;
  userId: number;
  mealList : Meal;
  constructor( private mealService : MealService , private modalService: NgbModal) { }

  ngOnInit(): void {
    
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.userId = this.user[0].id;

      this.mealService.getMealByUser(this.userId).subscribe( data =>{
        this.mealList = data;
      });
  }

  open(meal: Meal) {

    const mealModel : Meal = meal;
    const ref = this.modalService.open(UpdateMealComponent);
    ref.componentInstance.mealModel = mealModel;
  }

  openDelete(meal: Meal){
    const mealModelDel : Meal = meal;
    const ref = this.modalService.open(DeleteMealComponent);
    ref.componentInstance.mealModelDel = mealModelDel;
  }

  

}
