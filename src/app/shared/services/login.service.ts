import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceUtil } from '@utils/classes/service.class';
import { Observable } from 'rxjs';
import { ServerResponse } from 'shared/interface/server-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serviceUtil: ServiceUtil;
  endpointRoute: string;
   
  constructor(
    private http: HttpClient
  ) {
    this.serviceUtil = new ServiceUtil();
    this.endpointRoute = this.serviceUtil.createRoute('login');
   }

   login( user:string, pass:string ):Observable<ServerResponse>{
    const url = `${this.endpointRoute}`;
    const body = { user, pass };

    return this.http.post<ServerResponse>(url, body)
  }
  }
