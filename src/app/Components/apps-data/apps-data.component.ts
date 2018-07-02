import { Component, OnInit } from '@angular/core';
import { Home, NewReleases, Top_Charts } from '../../../assets/appsData';
@Component({
    selector: 'appsdata',
    templateUrl: './apps-data.component.html',
    styleUrls: ['./apps-data.component.scss']
})
export class AppsDataComponent implements OnInit {
    home = Home;
    type='home';
    constructor() { }

    ngOnInit() {
    }

    openCity(type) {
        this.home= [];
            this.type='';
        if (type === 'home') {
            
            this.home = Home;
            this.type = type;
        } else if (type === 'new') {
            this.home = NewReleases;
            this.type = type;
        } else if (type === 'top') {
            this.home = Top_Charts;
            this.type = type;
        }
    }

}
