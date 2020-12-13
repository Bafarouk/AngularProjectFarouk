import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { DeleteMealComponent } from './components/delete-meal/delete-meal.component';
import { SearchMealByCategoryComponent } from './components/search-meal-by-category/search-meal-by-category.component';
import { UpdateMealComponent } from './components/update-meal/update-meal.component';
import { ViewAllMealComponent } from './components/view-all-meal/view-all-meal.component';
import { ViewMealByUserComponent } from './components/view-meal-by-user/view-meal-by-user.component';
import { ViewMealComponent } from './components/view-meal/view-meal.component';
import { MainGuardGuard } from './main-guard.guard';



const routes: Routes = [
    {path: 'add-meal' ,component: AddMealComponent, canActivate: [MainGuardGuard]},
    {path: 'view-all-meal' ,component: ViewAllMealComponent, canActivate: [MainGuardGuard]},
    {path: 'view-meal-user' ,component: ViewMealByUserComponent, canActivate: [MainGuardGuard]},
    {path: 'update-meal/:id' ,component: UpdateMealComponent, canActivate: [MainGuardGuard]},
    {path: 'view-all-meal/view-meal/:id' ,component: ViewMealComponent, canActivate: [MainGuardGuard]},
    {path: 'view-meal-user/view-meal/:id' ,component: ViewMealComponent, canActivate: [MainGuardGuard]},
    {path: 'delete-meal/:id' ,component: DeleteMealComponent, canActivate: [MainGuardGuard]},
    {path: 'main/search-meal/:id' ,component: SearchMealByCategoryComponent, canActivate: [MainGuardGuard]},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
