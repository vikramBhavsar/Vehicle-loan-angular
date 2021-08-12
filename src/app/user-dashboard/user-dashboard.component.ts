import { Component, OnInit } from '@angular/core';
import { LoanDetailsInfo } from '../models/loan-details-info';
import { UserDashboardService } from '../services/user-dashboard.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  haveLoan:boolean = true;
  

  userDashboard!:LoanDetailsInfo;

  constructor(private userDashService:UserDashboardService) { }

  ngOnInit(): void {

    this.userDashService.getUserData(1).subscribe(data => {
      this.userDashboard = data;
      console.log("After getting the data");
      console.log(this.userDashboard);
    });
  }



}
