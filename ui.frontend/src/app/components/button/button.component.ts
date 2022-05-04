import { Component, Input, OnInit } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text:string;  

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goHomePage(): void {
    this.router.navigate(['/content/angularapp/us/en/home.html']);
  }

}

MapTo('angularapp/components/button')(ButtonComponent);
