import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent implements OnInit {
  public principal!: number;
  public years!: number;
  public rateofinterest!: number;
  public EMI !: number;
  public yearly_emi!: number;



  constructor() {


  }

  ngOnInit(): void {

  }

  onClick() {
    this.EMI = ((this.principal) * (this.rateofinterest / 1200)) * ((Math.pow(1 + (this.rateofinterest / 1200), (this.years * 12))) / (Math.pow((1 + (this.rateofinterest / 1200)), (this.years * 12)) - 1));
    this.yearly_emi = this.EMI * 12;
    console.log(this.principal);
    console.log(this.years);
    console.log(this.rateofinterest);
    console.log(this.EMI);
    console.log(this.yearly_emi);
    return (this.EMI, this.yearly_emi);


  }


}



