import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';

const URL_OPEN_WEATHER_ICON = '';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {
  weather = {};
  icon; 
  locale;

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {    
    this.getClimate(-28.264978335353234, -52.412004631674485 );
  }  

  
  private getClimate(latitude: number, longitude: number) {
  this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt&units=metric&APPID=ce765a481ed0ec0fd7294c4e1bed85f5`)
      
      .subscribe(result => {
          if (result)
          this.getIcon(result);
          this.getTemperature(result);
      }, error => {
          console.error(error);
      });
  }

  private getIcon(value){
    this.icon = `http://openweathermap.org/img/w/${value.weather[0].icon}.png`;
  }

  private getTemperature(value) {
    this.weather = value.main.temp.toFixed(0);
    this.locale = value.name;
  }
  
}
MapTo('angularapp/components/climate')(ClimateComponent);