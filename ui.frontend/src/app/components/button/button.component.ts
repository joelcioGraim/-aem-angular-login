import { Component, Input, OnInit } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text:string;  

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    ) {
  }

  ngOnInit(): void {
    
  }

  clickGo(): void {

    if (this.router.url === '/content/angularapp/us/en/login.html' && this.loginValues() === true) {
      this.router.navigate(['/content/angularapp/us/en/home.html']);
    } 
    
    if (this.router.url === '/content/angularapp/us/en/not-found.html') {
      this.router.navigate(['/content/angularapp/us/en/login.html']);
    }    
  }

  private loginValues(): boolean {
    const isChecked = this.localStorageService.get('username') && this.localStorageService.get('password') ? true : false;
    return isChecked;
  }

}
MapTo('angularapp/components/button')(ButtonComponent);
