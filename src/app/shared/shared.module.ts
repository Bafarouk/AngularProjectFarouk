import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './layouts/home/home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { BodyComponent } from './components/body/body.component';
import { MainComponent } from './layouts/main/main.component';
import { SharedRoutingModule } from './shared-routing.module';
import { AuthModule } from '../auth/auth.module';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { ViewMealComponent } from './components/view-meal/view-meal.component';
import { ViewAllMealComponent } from './components/view-all-meal/view-all-meal.component';
import { UpdateMealComponent } from './components/update-meal/update-meal.component';
import { DeleteMealComponent } from './components/delete-meal/delete-meal.component';
import { SearchMealByCategoryComponent } from './components/search-meal-by-category/search-meal-by-category.component';
import { ViewMealByUserComponent } from './components/view-meal-by-user/view-meal-by-user.component';



@NgModule({
  declarations: [HomeComponent,
    HeaderComponent,
    WeatherWidgetComponent,
    BodyComponent,
    MainComponent,
    AddMealComponent,
    ViewMealComponent,
    ViewAllMealComponent,
    UpdateMealComponent,
    DeleteMealComponent,
    SearchMealByCategoryComponent,
    ViewMealByUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    AuthModule,
  ],
  exports: [
    HomeComponent,
    MainComponent
  ]
})
export class SharedModule { }
