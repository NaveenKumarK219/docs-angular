import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Cookie} from 'ng2-cookies';
import {Router} from '@angular/router';
import {NotifierService} from 'angular-notifier';
import { AppConstants } from '../model/AppConstants';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private httpClient: HttpClient,
                private router: Router,
				private notifier: NotifierService) {

    }

    getAccessToken(username, password) {
        
		const body = 'grant_type=password&username='+username+'&password='+password+'&client_id=docs-client';
        const headers = new HttpHeaders({'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
			Authorization: 'Basic ' + btoa('docs-client:docs-secret')
		});

        this.httpClient.post(AppConstants.tokenUrl, body, {headers: headers})
            .subscribe(data => this.saveToken(data),
                loginError => {
					console.log(body.toString());
					console.log(loginError);
                    this.notifier.notify('error', 'Invalid Credentials!');
                    this.router.navigate(['login']).finally();
                });
    }

    saveToken(token) {
        const expiryDate = new Date().getTime() + (token.expies_in * 1000);
        Cookie.delete('access_token');
        Cookie.set('access_token', token.access_token, expiryDate);
		//console.log('Access Token : ' + token.access_token);
		
        this.router.navigate(['admin/dashboard']).finally();
	}
	
	getUserDetails(){
		this.httpClient.get('')
	}

    isUserLoggedIn() {
        const token = Cookie.get('access_token');
        return !(token === null);
    }

    logout() {
        Cookie.delete('access_token');
    }

}
