import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  active:boolean[] = [true,false,false,false,false];

  constructor() { }

  ngOnInit(): void {
    
  }

  updateNavbar(tab:number){
    for(let i = 0;i<5;i++){
      this.active[i] = (i==tab)? this.active[i] = true: this.active[i] = false
    }
  }

}
