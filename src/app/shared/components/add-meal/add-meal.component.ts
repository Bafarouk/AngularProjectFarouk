import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from '../../models/Category';
import { User } from '../../models/User';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

  @Input() mealModelAdd;
  user : User;

  ShareForm: FormGroup;
  categories = [
    {id: 1, categoryName: 'Sandwiches'},
    {id: 2, categoryName: 'Salads'},
    {id: 3, categoryName: 'Pasta'},
    {id: 4, categoryName: 'Soups'},
    {id: 5, categoryName: 'Meat'},
  ];
  categId: number;

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
    this.user = JSON.parse(localStorage.getItem('currentUser'));

    this.mealModelAdd.userId = this.user[0].id;
    this.mealModelAdd.price = this.ShareForm.value.priceControl;
    this.mealModelAdd.description = this.ShareForm.value.descriptionControl;
    this.mealModelAdd.title = this.ShareForm.value.titleControl;
    this.mealModelAdd.categoryId = this.getCategoryId(this.ShareForm.value.categoryControl);
    this.mealModelAdd.mealImg = "http://localhost:4200/assets/images/tacos-a-la-viande.jpg";

    console.log(this.mealModelAdd);

    this.mealService.addMeal(this.mealModelAdd).subscribe((data) => {
      console.log("Add OK");
      console.log(data);
      
    });
    this.modal.close();
    window.location.reload();
  }

  getCategoryId(category : any): number{
    this.categId=0;
     this.categories.map((categ) => {
      if( categ.categoryName == category)
      {
        this.categId= categ.id;
      }
    });
    return this.categId
  }

}
