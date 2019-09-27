import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppConstants } from '../model/AppConstants';
import { APIStatus } from '../model/apistatus';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private httpClient: HttpClient) {
    }

    getMenu() {
        return this.httpClient.get<APIStatus>(AppConstants.menuUrl);
        // return this.httpClient.get<MenuDetails[]>('/assets/menu-details.json');
    }

    getDocContent(fileName: string) {
        return this.httpClient.get<APIStatus>(AppConstants.docUrl + fileName);
	}
	
	getAdminMenu(){
		return this.httpClient.get<APIStatus>(AppConstants.adminMenuUrl);
	}
}
