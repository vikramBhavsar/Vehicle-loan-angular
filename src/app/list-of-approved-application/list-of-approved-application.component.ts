import { Component, OnInit } from '@angular/core';
import { LoanApplicationList } from '../models/loan-application';
import { LoanApplicationService } from '../services/loan-application.service';

@Component({
  selector: 'app-list-of-approved-application',
  templateUrl: './list-of-approved-application.component.html',
  styleUrls: ['./list-of-approved-application.component.css']
})
export class ListOfApprovedApplicationComponent implements OnInit {

  loanApps!:LoanApplicationList[];

  constructor(private loanAppsService:LoanApplicationService) { }

  ngOnInit(): void {

    this.loanAppsService.getLoanList(2).subscribe(data =>{
      this.loanApps = data;
    });
  }

}
