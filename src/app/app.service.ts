import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MenuDetails } from './menu-details';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private httpClient: HttpClient, private router: Router) {
    }

    getAccessToken(loginData) {
        const params = new URLSearchParams();
        params.append('username', loginData.username);
        params.append('password', loginData.password);
        params.append('grant_type', 'password');
        params.append('client_id',  'docs-client');

        /*let headers = new Headers({'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
                                'Authorization': 'Basic ' + btoa('docs-secret')});*/
        const headers = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Basic ' + btoa('docs-secret')});

        this.httpClient.post('http://localhost:8080/docs/oauth/token', params, {headers})
            .subscribe(data => this.saveToken(data),
                error => alert('Invalid Credentials!'));
    }

    saveToken(token){
        const expiryDate = new Date().getTime() + (token.expies_in * 1000);
        Cookie.set('access_token', token.access_token, expiryDate);
        console.log('Access Token : ' + token.access_token);
        this.router.navigate(['/']);
    }

    getMenu() {
       return this.httpClient.get<MenuDetails[]>('http://localhost:8080/docs/api/menu');
    }

    getDocContent(fileName: string) {
        return this.httpClient.get('http://localhost:8080/docs/api/' + fileName, {
            responseType: 'text'
        });
    }
}
