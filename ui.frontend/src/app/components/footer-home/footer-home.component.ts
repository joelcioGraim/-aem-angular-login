import { TimerComponent } from './../timer/timer.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrls: ['./footer-home.component.css']
})
export class FooterHomeComponent implements OnInit, AfterViewInit {

  @ViewChild(TimerComponent, { static: false })
  counter: TimerComponent;

  counterState = 'counter is ticking';

    constructor(private router: Router) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.counter.startAt = 600;
        this.counter.start();
    }

    keepBrowsing(): void {
        this.counter.reset = true;
        this.counter.stop();
        this.counter.start();
    }

    logout(): void {
        this.counter.stop();
        // this.router.navigate(['/content/angularapp/us/en/login.html']);
        this.router.navigate(['/content/angularapp/us/en/not-found.html']);
    }

}
MapTo('angularapp/components/footer-home')(FooterHomeComponent);