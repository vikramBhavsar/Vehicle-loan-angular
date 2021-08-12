import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoanApplication } from '../models/loan-application';
import { UserDashboardView } from '../models/user-dashboard-view';
import { LoanApplicationService } from '../services/loan-application.service';

@Component({
  selector: 'app-detail-loan-application',
  templateUrl: './detail-loan-application.component.html',
  styleUrls: ['./detail-loan-application.component.css']
})
export class DetailLoanApplicationComponent implements OnInit {

  loanAppId!:number;

  loanApplication!:LoanApplication;

  loanDetails!:UserDashboardView;

  constructor(
    private route: ActivatedRoute,
    private loanApplicationService:LoanApplicationService,
    private router: Router, 
  ) {}

  ngOnInit() {

    this.loanAppId = Number(this.route.snapshot.paramMap.get('id'));

    this.loanApplicationService.getLoanApplicationJoinById(this.loanAppId).subscribe(data=>{
      this.loanDetails = data;
    });


    this.loanApplicationService.getLoanApplicationData(this.loanAppId).subscribe(data =>{
      this.loanApplication = data;
    });

  }

  approveLoan(){
    this.loanApplication.statusId = 2;
    this.loanApplicationService.updateLoanApplication(this.loanApplication).subscribe(data=>{
      console.log(data);
      console.log("data uploaded successfully");
    })
    console.log(this.loanApplication);
    this.router.navigate(['get', {}]);

  }

  rejectLoan(){
    this.loanApplication.statusId = 3;
    console.log(this.loanApplication);
  }


  navigateBack(){
    this.router.navigateByUrl("admin_login");
  }

}
