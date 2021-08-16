import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { ageValidation } from '../Custom-Validations/customFormValidation';



@Component({
  selector: 'app-eligibity-check',
  templateUrl: './eligibity-check.component.html',
  styleUrls: ['./eligibity-check.component.css']
})
export class EligibityCheckComponent implements OnInit {

  showEligible:boolean = false;
  isEligible:boolean = false;

  ceform = new FormGroup({
    carType : new FormControl(),
    age : new FormControl(ageValidation),
    salary : new FormControl(),
    toe : new FormControl(),
    existingEMI : new FormControl(0),
    loanAmmount : new FormControl(),
    loanTenure :  new FormControl(),
    rateOfInterest: new FormControl(),
  });


  get age(){
    return this.ceform.get("age");
  }

  
  emiChecked:boolean = false;

  constructor() {
    this.emiChecked = false;
   }
  ngOnInit(): void {
  }

  toggleEmi(){
    this.emiChecked = !this.emiChecked;
  }

  checkEligible(cartype:string,age:number,salary:number,toe:string,exEMI:number,lAmmount:number,lTenurey:number,rateOI:number){
    rateOI = rateOI/1200;
    let lTenure = lTenurey * 12;

    let monthlyEMI = lAmmount * rateOI * ( (Math.pow((1+rateOI),lTenure) / ( (Math.pow((1+rateOI),lTenure)) - 1)  ));

    let roundedEMI = Math.round(monthlyEMI)

    alert(`Monthly EMI: ${roundedEMI}\n, Car Type: ${cartype},\n Age: ${age},\n SalaryL ${salary}, \n TOE: ${toe},\n EEMI: ${exEMI},\n Loan Amount${lAmmount},\n Loan Tenure: ${lTenure},\nROI: ${rateOI}`);
    let eligible:boolean;


    if((cartype == '1' && lTenure <= 84) || (cartype == '2' && lTenure <= 60)){ // checking the car type and age.

      if(toe=='1'){
          if( age >= 21 && ((age+lTenurey) <= 60)){
            if(salary >= 300000){
              if(( (salary/12) - (exEMI + roundedEMI)) > (((salary/12) * 35) / 100)){
                eligible = true;
              }else{
                eligible = false;
              } // end of salary - exEmi
            }else{
              eligible = false;
            } // end of salary < 30000
          }else{
            eligible = false;
          } // age is not upto tenure
      }else{

        if( age >= 21 && ((age + lTenurey) <= 65)){
          if(salary >= 400000){
            if(((salary/12) - (exEMI + roundedEMI)) > (((salary/12) * 35) / 100)){
              eligible = true;
            }else{
              eligible = false;
            } // end of salary - exEmi
          }else{
            eligible = false;
          } // end of salary < 30000
        }else{
          eligible = false;
        } // age is not upto tenure
      } // TOE is self employed.
    }else{
      eligible = false;
    }

    // End of logic returning boolean
    this.isEligible = eligible;
    alert(eligible);
  }
  

  checkEligibility(){
    this.checkEligible(
    this.ceform.value['carType'],
    Number(this.ceform.value['age']),
    Number(this.ceform.value['salary']),
    this.ceform.value['toe'],
    Number(this.ceform.value['existingEMI']),
    Number(this.ceform.value['loanAmmount']),
    Number(this.ceform.value['loanTenure']),
    Number(this.ceform.value["rateOfInterest"]),
    )


    this.showEligible = true;
  }

}
