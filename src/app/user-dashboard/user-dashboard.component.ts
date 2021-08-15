import { Component, OnInit } from '@angular/core';
import { LoanDetailsInfo } from '../models/loan-details-info';
import { UserDashboardService } from '../services/user-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  public sessionStorage = sessionStorage;

  haveLoan:boolean = true;
  

  userDashboard!:LoanDetailsInfo;

  constructor(private userDashService:UserDashboardService,
            private router: Router,
    ) { }

  ngOnInit(): void {

    if(sessionStorage.getItem("userid")!=null){
      this.userDashService.getUserData(Number(sessionStorage.getItem("userid"))).subscribe(data => {
        this.userDashboard = data;
        console.log("After getting the data");
        console.log(this.userDashboard);
  
        if(this.userDashboard == null){
          this.haveLoan = false;
        }
      });
    }

  }

  goToApplyLoan(){
    this.router.navigateByUrl("apply_loan");
  }



}
