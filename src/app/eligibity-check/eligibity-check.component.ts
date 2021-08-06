import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibity-check',
  templateUrl: './eligibity-check.component.html',
  styleUrls: ['./eligibity-check.component.css']
})
export class EligibityCheckComponent implements OnInit {
  emiChecked:boolean = false;

  constructor() {
    this.emiChecked = false;
   }
  ngOnInit(): void {
  }

  toggleEmi(){
    this.emiChecked = !this.emiChecked;
  }

}
