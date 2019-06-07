import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuDetails } from './menu-details';

@Injectable({
    providedIn: 'root'
})
export class AppService{
 
    constructor(private httpClient: HttpClient){
        
    }

    getMenu(){
       return this.httpClient.get<MenuDetails[]>('http://localhost:8080/docs/api/menu');
    }

    getDocContent(fileName: string){
        return this.httpClient.get('http://localhost:8080/docs/api/'+fileName, {
            responseType: "text"
        });
    }
}