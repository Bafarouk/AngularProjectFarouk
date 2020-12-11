import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './layouts/home/home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { BodyComponent } from './components/body/body.component';
import { MainComponent } from './layouts/main/main.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [HomeComponent,HeaderComponent, WeatherWidgetComponent, BodyComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule
  ],
  exports: [
    HomeComponent,
    MainComponent
  ]
})
export class SharedModule { }
