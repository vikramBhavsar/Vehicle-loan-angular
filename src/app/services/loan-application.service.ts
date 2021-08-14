import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LoanApplication, LoanApplicationList } from '../models/loan-application';
import { ViewVehicleDetails } from '../models/view-vehicle-details';
import { UserDashboardView } from '../models/user-dashboard-view';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {

  loanAppUrl = "http://localhost:6969/api/Main/";

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  getVehicleDetails(vid:number){
    return this.http.get<ViewVehicleDetails>(this.loanAppUrl+`get-vehicle-details/${vid}`);
  }

  getLoanApplicationData(lapp:number){
    return this.http.get<LoanApplication>(this.loanAppUrl+`get-loan-app/${lapp}`);
  }

  updateLoanApplication(lapp:LoanApplication){
    return this.http.put<LoanApplication>(this.loanAppUrl+'get-loan-app/',lapp,this.httpOptions);
  }

  getLoanList(status_id:number){
    return this.http.get<LoanApplicationList[]>(this.loanAppUrl+`loan-application/${status_id}`);
  }

  getLoanApplicationJoinById(lappid:number){
    return this.http.get<UserDashboardView>(this.loanAppUrl+`loan-view-details-loan/${lappid}`);
  }

  getLoanApplicationJoinByUserId(userid:number){
    return this.http.get<UserDashboardView>(this.loanAppUrl+`loan-view-details-user/${userid}`);
  }

  createLoanApplication(lapp:LoanApplication){
    return this.http.post<LoanApplication>(this.loanAppUrl+'create-loan-app',lapp,this.httpOptions);
  }

}
