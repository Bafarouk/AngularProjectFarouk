import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

  @Input() mealModelAdd;

  ShareForm: FormGroup;
  categories = [
    {id: 1, categoryName: 'Sandwiches'},
    {id: 2, categoryName: 'Salads'},
    {id: 3, categoryName: 'Pasta'},
    {id: 4, categoryName: 'Soups'},
    {id: 5, categoryName: 'Meat'},
  ];

  constructor(public modal: NgbActiveModal, private mealService : MealService, private formBuilder: FormBuilder) {
    this.ShareForm =  formBuilder.group({
      priceControl: ['' , [Validators.required,
                           Validators.pattern("^[0-9]*$")
                          ]],
      descriptionControl: ['' , Validators.required],
      titleControl: ['', [Validators.required,
                          Validators.pattern("^[a-zA-Z]*$")
                        ]],
      categoryControl: ['' , ]
    });
   }

  ngOnInit(): void {
    console.log(this.mealModelAdd);
    
  }

  share(){

    console.log(this.ShareForm.value);
    

  }

}
