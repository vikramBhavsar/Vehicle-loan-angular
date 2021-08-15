import { Component, OnInit } from '@angular/core';
import { LoanApplication, LoanApplicationList } from '../models/loan-application';
import { LoanApplicationService } from '../services/loan-application.service';

@Component({
  selector: 'app-list-of-loan-application',
  templateUrl: './list-of-loan-application.component.html',
  styleUrls: ['./list-of-loan-application.component.css']
})
export class ListOfLoanApplicationComponent implements OnInit {

  loanApps!:LoanApplicationList[];

  constructor(private loanAppService: LoanApplicationService) { }

  ngOnInit(): void {
    this.loanAppService.getLoanList(1).subscribe(data =>{
      console.log("Showing server data");
      console.log(data);
      this.loanApps = data;
      console.log("Showing loan apps variable");
      console.log(this.loanApps)
    });  
  }



}
