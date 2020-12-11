import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './shared/components/body/body.component';
import { MainComponent } from './shared/layouts/main/main.component';


const routes: Routes = [
  {path:'' , component: BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
