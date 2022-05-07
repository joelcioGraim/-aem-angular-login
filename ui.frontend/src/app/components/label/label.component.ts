import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';
import { LabelService } from 'src/app/services/label.service';

@Component({
    selector: 'app-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit {
    @Input() label: string;

    isInvalidLogin = false;

    constructor(private labelService: LabelService) {}

    ngOnInit(): void {
        this.labelService.getInvalidLogin().subscribe((invalid) => {
            this.isInvalidLogin = invalid;
        });
    }
}

MapTo('angularapp/components/label')(LabelComponent);
