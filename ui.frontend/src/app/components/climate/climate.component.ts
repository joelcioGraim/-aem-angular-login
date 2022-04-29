import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})
export class ClimateComponent implements OnInit {


  @Input() weather: any;

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {    
    this.getClimate(-28.264978335353234, -52.412004631674485 );
  }  

  // .pipe(map(result => (<any>result).dailyForecasts.forecastLocation))
  private getClimate(latitude: number, longitude: number) {
  this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&APPID=ce765a481ed0ec0fd7294c4e1bed85f5`)
      
      .subscribe(result => {
          this.weather = result;
      }, error => {
          console.error(error);
      });
  }
  
}
MapTo('angularapp/components/climate')(ClimateComponent);