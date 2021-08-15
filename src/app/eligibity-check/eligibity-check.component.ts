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

  checkEligible(cartype:string,age:number,salary:number,toe:string,exEMI:number,lAmmount:number,lTenure:number,rateOI:number){
    rateOI = rateOI/12/100;
    let monthlyEMI = lAmmount * rateOI * ( (Math.pow((1+rateOI),lTenure) / ( (Math.pow((1+rateOI),lTenure)) - 1)  ));
    alert(`${monthlyEMI},${cartype},${age},${salary},${toe},${exEMI},${lAmmount},${lTenure},${rateOI}`);
    let eligible:boolean;

    if(cartype == '1'){ // new car type

      if((age + Math.ceil(lTenure/12)) > 60){
        eligible = false;
      }else{  
          if(toe == '1'){ // salaried
            if(salary < 300000){
              eligible = false
            }else{
              salary = salary - exEMI;

              if((salary - monthlyEMI) > 30000){
                eligible = true;
              }else{
                eligible = false;
              }
            }
          }else{  // self employed
            if(salary < 400000){
              eligible = false
            }else{
              rateOI = rateOI/12/100;
              salary = salary - exEMI;

              if((salary - monthlyEMI) > 30000){
                eligible = true;
              }else{
                eligible = false;
              }
            }
          }
      }
    }else{  // used car type


      if(lTenure > 60){
        eligible = false;
      }else{
        if((age + Math.ceil(lTenure/12)) > 60){
          eligible = false;
        }else{  
            if(toe == '1'){ // salaried
              if( (salary*12) < 300000){
                eligible = false
              }else{
                salary = salary - exEMI;
  
                if((salary - monthlyEMI) > 30000){
                  eligible = true;
                }else{
                  eligible = false;
                }
              }
            }else{  // self employed
              if((salary*12) < 400000){
                eligible = false
              }else{
                salary = salary - exEMI;
  
                if((salary - monthlyEMI) > 30000){
                  eligible = true;
                }else{
                  eligible = false;
                }
              }
            }
        }
      }

    }

    this.isEligible = eligible;
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
