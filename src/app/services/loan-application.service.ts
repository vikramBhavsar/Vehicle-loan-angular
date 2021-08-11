import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanApplication } from '../models/loan-application';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {

  loanAppUrl = "http://localhost:6969/api/Main/";

  constructor(private http:HttpClient) { }


  getLoanApplicationData(lapp:number){
    return this.http.get<LoanApplication>(this.loanAppUrl+`get-loan-app/${lapp}`);
  }

}
