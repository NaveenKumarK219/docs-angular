import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';
import { MenuDetails } from './model/menu-details';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    menuDtls: MenuDetails[] = [];
    adminView: boolean;
    constructor(private appService: AppService, private router: Router) {
    }

    ngOnInit() {
        this.adminView = false;
        this.appService.getMenu().subscribe(menuData => {
            this.menuDtls = menuData;
            // console.log(menuData);
        });
    }

    isAdminView() {
        return this.adminView;
    }

    setAdminView(flag) {
        this.adminView = flag;
    }
}
