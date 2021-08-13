import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logininfo } from '../Models/logininfo';
import { Userinfo } from '../Models/userinfo';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  private ApiUrl="http://localhost:30623/api"
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

  constructor(private httpClient: HttpClient) { }

  create(luser:any): Observable<Logininfo> {
    return this.httpClient.post<Logininfo>(this.ApiUrl + '/Main/user/', JSON.stringify(luser), this.httpOptions)    
  } 

  createuser(ruser:any): Observable<Userinfo> {
    return this.httpClient.post<Userinfo>(this.ApiUrl + '/Main/userinfo', JSON.stringify(ruser), this.httpOptions)    
  } 

}
