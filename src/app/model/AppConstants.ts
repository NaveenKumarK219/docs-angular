import { Injectable } from "@angular/core";

@Injectable()
export class AppConstants {
	public static domainName = 'http://localhost:8080';
	public static tokenUrl = AppConstants.domainName + '/oauth/token';
	public static menuUrl = AppConstants.domainName + '/api/menu';
	public static adminMenuUrl = AppConstants.domainName + '/api/admin-menu'
	public static docUrl = AppConstants.domainName + '/api/';
	public static userInfoUrl = AppConstants.domainName + '/admin/get-user-info';
}