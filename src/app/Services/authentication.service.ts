import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { Observable } from 'rxjs';
import { AdminForm, LoginForm } from '../Models/login-form';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private ApiUrl = 'http://localhost:6969/api/Main';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<LoginForm[]> {
    return this.httpClient.get<LoginForm[]>(this.ApiUrl + '/userlogin');
  }

  checkUser(userlogin:LoginForm):Observable<LoginForm>{
    return this.httpClient.post<LoginForm>(this.ApiUrl+'/log-user-in',JSON.stringify(userlogin),this.httpOptions);
  }

  checkAdmin(adminLogin:AdminForm):Observable<AdminForm>{
    return this.httpClient.post<AdminForm>(this.ApiUrl+'/admin-log-in',JSON.stringify(adminLogin),this.httpOptions);
  }

  /* getbyId(uid):
{this.loginform.get("email")?.value,this.loginform.get("password")?.value
  Observable<LoginForm>{
    return this.httpClient.get<LoginForm[]>(this.ApiUrl + '/main/userlogin' + uid)
  }
} */
}
