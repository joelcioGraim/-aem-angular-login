import { Component, OnInit } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';

@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrls: ['./footer-home.component.css']
})
export class FooterHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
MapTo('angularapp/components/footer-home')(FooterHomeComponent);