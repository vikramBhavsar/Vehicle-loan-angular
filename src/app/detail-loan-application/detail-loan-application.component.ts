import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoanApplication } from '../models/loan-application';
import { UserDashboardView } from '../models/user-dashboard-view';
import { Userinfo } from '../Models/userinfo';
import { LoanApplicationService } from '../services/loan-application.service';
import { UserRegistrationService } from '../Services/user-registration.service';

@Component({
  selector: 'app-detail-loan-application',
  templateUrl: './detail-loan-application.component.html',
  styleUrls: ['./detail-loan-application.component.css']
})
export class DetailLoanApplicationComponent implements OnInit {

  newAccountNo:string = "VSKY";

  public sessionStorage = sessionStorage;

  loanAppId!:number;

  loanApplication!:LoanApplication;

  loanDetails!:UserDashboardView;

  constructor(
    private route: ActivatedRoute,
    private loanApplicationService:LoanApplicationService,
    private userRegistrationService:UserRegistrationService,
    private router: Router, 
  ) {}

  ngOnInit() {

    this.loanAppId = Number(this.route.snapshot.paramMap.get('id'));

    this.loanApplicationService.getLoanApplicationJoinById(this.loanAppId).subscribe(data=>{
      this.loanDetails = data;
      console.log(this.loanDetails);
    });


    this.loanApplicationService.getLoanApplicationData(this.loanAppId).subscribe(data =>{
      this.loanApplication = data;
      console.log(this.loanApplication);
    });

  }

  approveLoan(){
    this.loanApplication.statusId = 2;
    this.loanApplicationService.updateLoanApplication(this.loanApplication).subscribe(data=>{
      console.log(data);
      console.log("data uploaded successfully");
    })
    console.log(this.loanApplication);
    this.router.navigateByUrl("admin_dashboard");

  }

  rejectLoan(){
    this.loanApplication.statusId = 3;
    this.loanApplicationService.updateLoanApplication(this.loanApplication).subscribe(data=>{
      console.log(data);
      console.log("data uploaded successfully");
    })
    console.log(this.loanApplication);
    this.router.navigateByUrl("admin_dashboard");
  }


  navigateBack(){
    this.router.navigateByUrl("admin_dashboard");
  }


  updateAccountNo(){
    // get user data 
    this.userRegistrationService.getUserInfoById(this.loanDetails.uid).subscribe(data =>{

      let userinfo:Userinfo = data;
      console.log("Received user information");
      console.log(userinfo);
      userinfo.accountNo = this.newAccountNo;

      this.userRegistrationService.updateUserAccountNo(userinfo).subscribe(data => {
        alert("Account Number updated.");

        // updating the UI
        this.loanApplicationService.getLoanApplicationJoinById(this.loanAppId).subscribe(data=>{
          this.loanDetails = data;
          console.log(this.loanDetails);
        });

      })

    })
  }

}
