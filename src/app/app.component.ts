import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';
import { MenuDetails } from './model/menu-details';
import {Router} from '@angular/router';
import { AdminMenu } from './model/admin-menu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	menuDtls: MenuDetails[] = [];
	adminView: boolean;
	adminMenu: AdminMenu[] = [];
	userRole: string;
    constructor(private appService: AppService, private router: Router) {
    }

    ngOnInit() {
        this.setAdminView(false);
        this.appService.getMenu().subscribe(menuData => {
			console.info("Menu Details Api Status: ", menuData);
			this.menuDtls = menuData.data as Array<MenuDetails>;
		});
		this.appService.getAdminMenu().subscribe(
			apiData => {
				this.adminMenu = apiData.data as Array<AdminMenu>;
			},
			apiError => {
				console.error("Error Occured In Getting Admin Menu: ", apiError);
			}
		);
    }

    isAdminView() {
        return this.adminView;
    }

    setAdminView(flag) {
        this.adminView = flag;
    }
}
