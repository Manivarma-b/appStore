import { Component, OnInit } from '@angular/core';
// import { Home, NewReleases, Top_Charts } from '../../../assets/appsData';
import { ServiceFileService } from '../../services/service-file.service';
@Component({
    selector: 'appsdata',
    templateUrl: './apps-data.component.html',
    styleUrls: ['./apps-data.component.scss']
})
export class AppsDataComponent implements OnInit {
    home;
    type = 'home';
   
    constructor(public service: ServiceFileService) { }

    ngOnInit() {
        this.service.getData('homeGames').subscribe(res => {
            //  console.log(JSON.parse(JSON.stringify(res.json().Response)));
            this.home = res.json();
           
        })
    }

    openCity(type) {
        this.home = [];
      
        if (type === 'home') {
            this.getData('homeGames')
            this.type = type;
        } else if (type === 'new') {
            this.getData('newGames')
            this.type = type;
        } else if (type === 'top') {
            this.getData('topGames')
            this.type = type;
        }
    }
    getData(type) {
        this.service.getData(type).subscribe(res => {
            this.home = res.json();
        })
    }


}
