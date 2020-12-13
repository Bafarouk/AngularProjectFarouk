import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Meal } from '../../models/Meal';
import {FormBuilder, FormGroup, FormControl, Validators }  from '@angular/forms'
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-update-meal',
  templateUrl: './update-meal.component.html',
  styleUrls: ['./update-meal.component.css']
})
export class UpdateMealComponent implements OnInit {

  @Input() mealModel;
  mealUpd: Meal;

  updateForm: FormGroup;

  constructor(public modal: NgbActiveModal, private formBuilder: FormBuilder, private mealService: MealService) {
    this.updateForm =  formBuilder.group({
      priceControl: ['' , [Validators.required,
                           Validators.pattern("^[0-9]*$")
                          ]],
      descriptionControl: ['' , Validators.required]
    });
   }

  ngOnInit(): void {

    console.log(this.mealModel);
    console.log(this.mealModel.id);

    this.updateForm.setValue({
      priceControl: this.mealModel.price,
      descriptionControl: this.mealModel.description
    });
    
  }

  update(){
    console.log(this.updateForm.value);
    console.log(this.updateForm.value.priceControl);
    console.log(this.updateForm.value.descriptionControl);
    
    this.mealUpd = new Meal();
    this.mealUpd.id = this.mealModel.id;
    this.mealUpd.title = this.mealModel.title;
    this.mealUpd.mealImg = this.mealModel.mealImg;
    this.mealUpd.categoryId = this.mealModel.categoryId;
    this.mealUpd.userId = this.mealModel.userId;
    this.mealUpd.price = this.updateForm.value.priceControl;
    this.mealUpd.description = this.updateForm.value.descriptionControl;

    console.log(this.mealUpd);

    this.mealService.updateMeal(this.mealUpd, this.mealUpd.id).subscribe( data => {
      console.log(data);
      console.log("update OK");
    });
    
    this.resetForm();
    this.modal.close();
  }

  resetForm(){
    this.updateForm.reset();
  }

}
