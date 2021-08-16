import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logininfo } from '../Models/logininfo';
import { Userinfo } from '../Models/userinfo';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  private ApiUrl="http://localhost:6969/api/Main"
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

  constructor(private httpClient: HttpClient) { }

  create(luser:any): Observable<Logininfo> {
    return this.httpClient.post<Logininfo>(this.ApiUrl + '/user/', JSON.stringify(luser), this.httpOptions)    
  } 

  createuser(ruser:any): Observable<Userinfo> {
    return this.httpClient.post<Userinfo>(this.ApiUrl + '/userinfo', JSON.stringify(ruser), this.httpOptions)    
  } 

  updateUserAccountNo(userinfo:Userinfo){
    return this.httpClient.put<Userinfo>(this.ApiUrl + '/update-account-info',JSON.stringify(userinfo), this.httpOptions);
  }

  getUserInfoById(uid:number) :Observable<Userinfo>{
    return this.httpClient.get<Userinfo>(this.ApiUrl+`/get-user-info/${uid}`);
  }

}
