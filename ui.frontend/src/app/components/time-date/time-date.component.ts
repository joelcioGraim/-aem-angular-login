import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-time-date',
  templateUrl: './time-date.component.html',
  styleUrls: ['./time-date.component.css']
})
export class TimeDateComponent implements DoCheck {

  timeDate;

  constructor() { }

  ngDoCheck(): void {
    this.timeDate = new Date();
  } 

}
MapTo('angularapp/components/time-date')(TimeDateComponent);