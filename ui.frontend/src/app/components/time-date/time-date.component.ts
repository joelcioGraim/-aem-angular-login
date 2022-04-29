import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-date',
  templateUrl: './time-date.component.html',
  styleUrls: ['./time-date.component.css']
})
export class TimeDateComponent implements OnInit {

  @Input() timeDate = Date.now();

  constructor() { }

  ngOnInit(): void {
  } 

}
MapTo('angularapp/components/time-date')(TimeDateComponent);