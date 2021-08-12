import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDashboardView } from '../models/user-dashboard-view';
import { catchError, map, tap } from 'rxjs/operators';
import { LoanDetailsInfo } from '../models/loan-details-info';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {

  private userDashboardUrl = "http://localhost:6969/api/Main/UserDashboard";
  constructor(private http: HttpClient) { }

  getUserData(userid:number): Observable<LoanDetailsInfo>{
    return this.http.get<LoanDetailsInfo>(this.userDashboardUrl+`/${userid}`);
  }
}
