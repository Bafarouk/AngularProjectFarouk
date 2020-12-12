import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from '../models/Meal';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }


  getCategories() : Observable<Category>{
    return this.httpClient.get<Category>('/api/categories');
  }

  addMeal(meal : Meal) : Observable<Meal>{
    return this.httpClient.post<Meal>('/api/meals', meal, this.httpOptions);
  }

  getAllMeal() : Observable<Meal>{
    return this.httpClient.get<Meal>('/api/meals');
  }

  getMeal(mealId) : Observable<Meal>{
    return this.httpClient.get<Meal>('/api/meals/'+mealId);
  }

  updateMeal(meal : Meal , mealId) : Observable<Meal>{
    return this.httpClient.put<Meal>('/api/meals/'+mealId, meal);
  }

  deleteMeal(mealId) : Observable<Meal>{
    return this.httpClient.delete<Meal>('/api/meals/'+mealId);
  }

  searchMealCategory(categoryId) : Observable<Meal>{
    return this.httpClient.get<Meal>('/api/meals?categoryId='+categoryId);
  }

  

}
