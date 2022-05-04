import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type: string;
  @Input() placeholder: string;

  name: string;
  icon: string;
  value: string;
  valueChanged: Subject<string> = new Subject<string>();

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
      this.name = this.type === 'text' ? 'username' : 'password';
      this.icon = this.type === 'text' ? 'person' : 'lock';

      this.localStorageService.clear();

      this.valueChanged
          .pipe(debounceTime(1000), distinctUntilChanged())
          .subscribe((model) => {
              this.value = model;
              this.localStorageService.add(this.name, this.value);
          });
  }

  onChange(value: string) {
      this.valueChanged.next(value);
  }
}
MapTo('angularapp/components/input')(InputComponent);