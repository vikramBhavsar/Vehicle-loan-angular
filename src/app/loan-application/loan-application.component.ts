import { Component, OnInit } from '@angular/core';
import { ParentChildComService } from '../services/parent-child-com.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {
  public sessionStorage = sessionStorage;

  loanAppId!:string;

  active:boolean[] = [true,false,false,false,false];

  constructor(private ComCum:ParentChildComService) {
    this.ComCum.vehicleAnnounced$.subscribe(data=>{
      this.loanAppId = data;
    });

    this.ComCum.callForLoan$.subscribe(()=>{
      this.ComCum.announceVehicleID(this.loanAppId);
    });


   }

  ngOnInit(): void {
    
  }

  updateNavbar(tab:number){
    for(let i = 0;i<5;i++){
      this.active[i] = (i==tab)? this.active[i] = true: this.active[i] = false
    }
  }

}
