import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginForm } from '../Models/login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private ApiUrl="http://localhost:30623/api";
httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
constructor(private httpClient: HttpClient) { }
 getAll():
Observable<LoginForm[]>{
  return this.httpClient.get<LoginForm[]>(this.ApiUrl + '/main/userlogin')
}  

/* getbyId(uid):
{this.loginform.get("email")?.value,this.loginform.get("password")?.value
  Observable<LoginForm>{
    return this.httpClient.get<LoginForm[]>(this.ApiUrl + '/main/userlogin' + uid)
  }
} */

}
