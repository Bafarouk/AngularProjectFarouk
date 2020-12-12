import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './shared/components/body/body.component';
import { MainComponent } from './shared/layouts/main/main.component';
import { MainGuardGuard } from './shared/main-guard.guard';


const routes: Routes = [
  {path:'' , component: BodyComponent},
  { path: 'main', component: MainComponent , canActivate: [MainGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
