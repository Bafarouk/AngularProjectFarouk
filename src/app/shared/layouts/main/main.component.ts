import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/Category';
import { User } from '../../models/User';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  categoryList : Category;
  user : any  =  JSON.parse(localStorage.getItem('currentUser'));

  constructor(private mealService: MealService) { 
    
  }
  
  ngOnInit(): void {
    this.mealService.getCategories().subscribe( data => {
      this.categoryList = data ;
    });
    
    
  }

  

}
