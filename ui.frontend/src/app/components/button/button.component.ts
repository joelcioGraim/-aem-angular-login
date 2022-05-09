import { Component, Input, OnInit } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LabelService } from 'src/app/services/label.service';

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
    private labelService: LabelService
    ) {
  }

  ngOnInit(): void {
    this.labelService.setInvalidLogin(false);
  }

  clickGo(): void {

    if (this.router.url === '/content/angularapp/us/en/login.html' && this.loginValues() === true) {
      this.router.navigate(['/content/angularapp/us/en/home.html']);
    } else if (this.router.url === '/content/angularapp/us/en/not-found.html') {
      this.router.navigate(['/content/angularapp/us/en/login.html']);
    } else {
      this.labelService.setInvalidLogin(true);
    }
  }

  private loginValues(): boolean {
    const isChecked = (this.localStorageService.get('username') && this.localStorageService.get('password')) && 
    (this.localStorageService.get('username') === 'admin' && this.localStorageService.get('password') === 'admin') ? true : false;
    return isChecked;
  }

}
MapTo('angularapp/components/button')(ButtonComponent);
