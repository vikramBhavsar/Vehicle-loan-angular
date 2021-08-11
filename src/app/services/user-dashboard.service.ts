import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDashboardView } from '../models/user-dashboard-view';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {

  private userDashboardUrl = "http://localhost:6969/api/Main/UserDashboard";
  constructor(private http: HttpClient) { }

  getUserData(userid:number): Observable<UserDashboardView>{
    return this.http.get<UserDashboardView>(this.userDashboardUrl+`/${userid}`);
  }
}
