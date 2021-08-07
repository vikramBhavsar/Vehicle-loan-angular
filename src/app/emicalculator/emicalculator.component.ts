import * as core from '@angular/core';


@core.Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css'] 
})
export class EmicalculatorComponent implements core.OnInit {
public principal!:number;
public years!:number;
public rateofinterest!:number;
public EMI !:number;
public interestamount !:number;

  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.EMI = ((this.principal)*(this.rateofinterest/1200))*((Math.pow(1+(this.rateofinterest/1200),(this.years*12)))/(Math.pow((1+(this.rateofinterest/1200)),(this.years*12))-1));
    //650000* 0.007917 * (1+ 0.007917)^96 / ((1+ 0.007917)^96)-1
    this.interestamount = ((this.principal)*(Math.pow((1+(this.rateofinterest/100)),(this.years))))-(this.principal);
    console.log(this.principal);
    console.log(this.years);
    console.log(this.rateofinterest);
    console.log(this.EMI); 
    console.log(this.interestamount);
    return this.EMI;
   
  } 
}
