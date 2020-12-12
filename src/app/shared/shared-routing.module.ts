import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { DeleteMealComponent } from './components/delete-meal/delete-meal.component';
import { SearchMealByCategoryComponent } from './components/search-meal-by-category/search-meal-by-category.component';
import { UpdateMealComponent } from './components/update-meal/update-meal.component';
import { ViewAllMealComponent } from './components/view-all-meal/view-all-meal.component';
import { ViewMealComponent } from './components/view-meal/view-meal.component';
import { HomeComponent } from './layouts/home/home.component';
import { MainComponent } from './layouts/main/main.component';
import { MainGuardGuard } from './main-guard.guard';



const routes: Routes = [
    {path: 'add-meal' ,component: AddMealComponent},
    {path: 'view-all-meal' ,component: ViewAllMealComponent},
    {path: 'update-meal/:id' ,component: UpdateMealComponent},
    {path: 'view-all-meal/view-meal/:id' ,component: ViewMealComponent},
    {path: 'delete-meal/:id' ,component: DeleteMealComponent},
    {path: 'main/search-meal/:id' ,component: SearchMealByCategoryComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
