import { Component, OnInit } from '@angular/core';
/*  import { UserDashboardView } from '../models/user-dashboard-view';;
 import { UserDashboardService } from '../services/user-dashboard.service';;
 */
import { UserDashboardView } from '../models/user-dashboard-view';
import { LoanDetailsInfo } from '../models/loan-details-info';
import { UserDashboardService } from '../services/user-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  principal_amount!: number;
  rateofinterest!: number;
  month!: number;
  emi!: number;
  effrate!: number;

  Arr = Array;
  objArray: Array<emi_scheduler> = new Array();


  num!: number;

  public sessionStorage = sessionStorage;

  haveLoan: boolean = true;

  userDashboard?: LoanDetailsInfo;

  constructor(
    private userDashService: UserDashboardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('userid') != null) {
      this.userDashService
        .getUserData(Number(sessionStorage.getItem('userid')))
        .subscribe((data) => {
          this.userDashboard = data;
          console.log('After getting the data');
          console.log(this.userDashboard);

          if (this.userDashboard == null) {
            this.haveLoan = false;
          } else {
            // if the user has an active loan.

            this.principal_amount = this.userDashboard.principalAmmount;
            this.rateofinterest = this.userDashboard.rateOfInterest;
            this.month = this.userDashboard.loanTenure;
            this.num = this.userDashboard.loanTenure;


            // calculating emi
            this.emi =
              this.principal_amount *
              (this.rateofinterest / 1200) *
              (Math.pow(1 + this.rateofinterest / 1200, this.month) /
                (Math.pow(1 + this.rateofinterest / 1200, this.month) - 1));
            this.effrate = this.rateofinterest / 1200;

            let i = 1;

            for (let index = 0; index <= this.month; index++) {
              this.objArray[index] = new emi_scheduler();
              this.objArray[index].month = i;
              this.objArray[index].beginning_amount = this.principal_amount;
              this.objArray[index].interest_paid =
                this.effrate * this.objArray[index].beginning_amount;
              this.objArray[index].principal_paid =
                this.emi - this.objArray[index].interest_paid;
              this.objArray[index].ending_balance =
                this.objArray[index].beginning_amount -
                this.objArray[index].principal_paid;
              this.principal_amount = this.objArray[index].ending_balance;
              i = i + 1;
            }
          }
        });
    }
  }

  goToApplyLoan() {
    this.router.navigateByUrl('apply_loan');
  }
}

class emi_scheduler {
  month!: number;
  beginning_amount!: number;
  interest_paid!: number;
  principal_paid!: number;
  ending_balance!: number;
  constructor() {}
}
