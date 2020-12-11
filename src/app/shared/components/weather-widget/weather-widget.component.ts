import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  weatherData: any;

  constructor() { }

  ngOnInit(): void {
    this.weatherData = {
      main : {},
      isDay: true
    }

    this.getWeatherData();
    console.log(this.weatherData);
  }

  getWeatherData(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q=ariana&appid=d79b0984fd6aeb8d619a2d63d3818a34')
    .then( response => response.json())
    .then(data => {this.setWeatherData(data);})

    //let data = JSON.parse('');
    //this.setWeatherData(data);
  }

  setWeatherData(data){
    this.weatherData = data;
    let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleDateString();

    let currentDate = new Date();
    this.weatherData.isDay = (currentDate.getTime() > sunsetTime.getTime());
    this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
    this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
    this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
    this.weatherData.temp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);
  }

}
