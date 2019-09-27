import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies';
import { isNullOrUndefined } from 'util';

@Injectable()
export class DocInterceptor implements HttpInterceptor {
	
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let token = Cookie.get("access_token");
		if(!isNullOrUndefined(token)){
			req = req.clone({
				setHeaders: {
					'Authorization': `Bearer ${token}`
				}
			});
		}

		return next.handle(req);
	}
    
}