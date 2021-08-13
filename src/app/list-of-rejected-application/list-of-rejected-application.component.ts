import { Component, OnInit } from '@angular/core';
import { LoanApplicationList } from '../models/loan-application';
import { LoanApplicationService } from '../services/loan-application.service';

@Component({
  selector: 'app-list-of-rejected-application',
  templateUrl: './list-of-rejected-application.component.html',
  styleUrls: ['./list-of-rejected-application.component.css']
})
export class ListOfRejectedApplicationComponent implements OnInit {

  loanApps!:LoanApplicationList[];

  constructor(private loanAppService:LoanApplicationService) { }

  ngOnInit(): void {
    this.loanAppService.getLoanList(3).subscribe(data=>{
      this.loanApps = data;
    })
  }

}
