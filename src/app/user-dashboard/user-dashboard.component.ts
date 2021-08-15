import { Component, OnInit } from '@angular/core';
/*  import { UserDashboardView } from '../models/user-dashboard-view';;
 import { UserDashboardService } from '../services/user-dashboard.service';;
 */
import { UserDashboardService } from '../Services/user-dashboard.service';
import { UserDashboardView } from '../models/user-dashboard-view';
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

  userDashboard?:LoanDetailsInfo;

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

  principal_amount:number=550000;
  rateofinterest:number=9.1;
  year:number=7;
  month:number=this.year*12;
  emi:number=((this.principal_amount)*(this.rateofinterest/1200))*((Math.pow(1+(this.rateofinterest/1200),
  (this.month)))/(Math.pow((1+(this.rateofinterest/1200)),(this.month))-1));
  effrate=this.rateofinterest/1200;

  Arr=Array;
  num:number=this.month;
  i=1;
  status=false;
  

 objArray: Array<emi_scheduler> = new Array();  
  
  changestatus()
  {
    for (let index = 0; index <=this.month; index++)
    {
        
        this.objArray[index]=new emi_scheduler();
        this.objArray[index].month=this.i;
        this.objArray[index].beginning_amount=this.principal_amount;
        this.objArray[index].interest_paid=this.effrate*this.objArray[index].beginning_amount;
        this.objArray[index].principal_paid=this.emi-this.objArray[index].interest_paid;
        this.objArray[index].ending_balance=this.objArray[index].beginning_amount-this.objArray[index].principal_paid;
        this.principal_amount=this.objArray[index].ending_balance;
        this.i=this.i+1;
    } 
    this.status=true;
  }
  
}

class emi_scheduler {
  
  month!:number;
  beginning_amount!:number;
  interest_paid!:number;
  principal_paid!:number;
  ending_balance!:number; 
  constructor() {
    
  }
}