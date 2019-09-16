import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MenuDetails } from '../model/menu-details';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies';
import {NotifierService} from 'angular-notifier';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    docContent = '';
    constructor(private httpClient: HttpClient,
                private router: Router,
                private notifier: NotifierService) {
    }

    getMenu() {
       // return this.httpClient.get<MenuDetails[]>('http://localhost:8080/docs/api/menu');
        return this.httpClient.get<MenuDetails[]>('/assets/menu-details.json');
    }

    getDocContent(fileName: string) {
        this.httpClient.get<string>('http://localhost:8080/api/' + fileName).subscribe(
            content => this.docContent = content
        );
        return this.docContent;
    }
}
