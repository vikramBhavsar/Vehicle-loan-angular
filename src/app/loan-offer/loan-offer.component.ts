import { Component, OnInit } from '@angular/core';
import { LoanApplication,LoanOffer } from '../models/loan-application';
import { LoanApplicationService } from '../services/loan-application.service';
import { ParentChildComService } from '../services/parent-child-com.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-offer',
  templateUrl: './loan-offer.component.html',
  styleUrls: ['./loan-offer.component.css']
})
export class LoanOfferComponent implements OnInit {

  car_make!:string;
  car_model!:string;
  showroom_price!:number;

  usedCar!:boolean;

  newCarLoanAmmount!:number; 
  age:number=0;
  usedCarLoan!:number;

  loanOffers:LoanOffer[] = [
    new LoanOffer(0,3,2.5),
    new LoanOffer(0,6,3),
    new LoanOffer(0,12,6.7),
    new LoanOffer(0,24,13.4),
    new LoanOffer(0,36,20.1),
    new LoanOffer(0,48,26.8),
    new LoanOffer(0,60,33.5),
    new LoanOffer(0,72,40.2),
    new LoanOffer(0,84,46.9),
  ];

  monthlyEmi:number[] = [0,0,0,0,0,0,0,0,0];

  loanAppIdFromParent!:number;

  loanApp!:LoanApplication;

  constructor(private loanApplicationService:LoanApplicationService,
              private ComCom:ParentChildComService,
              private router: Router) { 

                this.ComCom.vehicleAnnounced$.subscribe(data=>{
                  console.log(`Received ${data}`);
                  this.loanAppIdFromParent = Number(data);
                });


                this.ComCom.callForLoanApplicationId();
              }

  ngOnInit(): void {
    // this.loanApp = new LoanApplication();

    this.loanApplicationService.getLoanApplicationData(this.loanAppIdFromParent).subscribe(data =>{
      console.log("Showing data");
      console.log(data);
      this.loanApp = data;
      console.log("Showing loanapp");
      console.log(this.loanApp);

      this.loanApplicationService.getVehicleDetails(this.loanApp.vid).subscribe(data =>{
        console.log("This is vehicle details from the server");
        console.log(data);

        this.car_make = data.carMake;
        this.car_model = data.carModel;
        this.showroom_price = data.exShowroomPrice;
      });
    });
  }


  usedCarSwitch(){
    this.usedCar = !this.usedCar
    this.newCarLoanAmmount = 0;
    this.age = 0;
    this.updateOffers();
  }

  updateOffers(){

    // for new car
    if(!this.usedCar){  
        for(let i = 0; i < this.loanOffers.length;i++ ){
          this.loanOffers[i].loanAmmount = this.newCarLoanAmmount + (( this.newCarLoanAmmount * this.loanOffers[i].rateOfInterest ) / 100);
          this.monthlyEmi[i]= this.newCarLoanAmmount * this.loanOffers[i].rateOfInterest * (Math.pow((1 + this.loanOffers[i].rateOfInterest),this.loanOffers[i].loanTenure)/(Math.pow((1 + this.loanOffers[i].rateOfInterest),this.loanOffers[i].loanTenure))-1)
          console.log(this.loanOffers[i].rateOfInterest);
          console.log(this.loanOffers[i].loanTenure);
        }

    }else{  
      // for used car
      if(this.age<=3){

        // applicable to either 80% of the showroom price or less if age of car is less than 3

        let eightOfShow = (this.showroom_price * 80 / 100);
        let currentLoanAmmount = Math.min(eightOfShow,this.usedCarLoan);

        for(let i = 0; i < this.loanOffers.length;i++ ){
          this.loanOffers[i].loanAmmount = currentLoanAmmount + (( currentLoanAmmount * this.loanOffers[i].rateOfInterest ) / 100);
          this.monthlyEmi[i]= currentLoanAmmount * this.loanOffers[i].rateOfInterest * (Math.pow((1 + this.loanOffers[i].rateOfInterest),this.loanOffers[i].loanTenure)/(Math.pow((1 + this.loanOffers[i].rateOfInterest),this.loanOffers[i].loanTenure))-1)
        }

      }else{

        // applicable to either 50% of the showroom price or less if age of car is more than 3

        let fiftyOfShow = (this.showroom_price * 50 / 100);
        let currentLoanAmmount = Math.min(fiftyOfShow,this.usedCarLoan);

        for(let i = 0; i < this.loanOffers.length;i++ ){
          this.loanOffers[i].loanAmmount = currentLoanAmmount + (( currentLoanAmmount * this.loanOffers[i].rateOfInterest ) / 100);
          this.monthlyEmi[i]= currentLoanAmmount * this.loanOffers[i].rateOfInterest * (Math.pow((1 + this.loanOffers[i].rateOfInterest),this.loanOffers[i].loanTenure)/(Math.pow((1 + this.loanOffers[i].rateOfInterest),this.loanOffers[i].loanTenure))-1)

        }
      }
    }

    console.log(this.monthlyEmi);
  }

  usedCarLoanChange(){
    this.updateOffers();
  }

  newCarLoanChange(){
    this.updateOffers();
  }

  ageUpdate(){
    this.updateOffers();
  }

  sendLoanOfferData(idex:number){

    this.loanApp.loanAmmount = this.loanOffers[idex].loanAmmount;
    this.loanApp.loanTenure = this.loanOffers[idex].loanTenure;
    this.loanApp.rateOfInterest = this.loanOffers[idex].rateOfInterest;

    if(this.usedCar){
      this.loanApp.isUsed = 'y';
      this.loanApp.ageold = this.age;

      if(this.age<3){
        let eightOfShow = (this.showroom_price * 80 / 100);
        this.loanApp.principalAmmount = Math.min(eightOfShow,this.usedCarLoan);
      }else{
        let fiftyOfShow = (this.showroom_price * 50 / 100);
        this.loanApp.principalAmmount = Math.min(fiftyOfShow,this.usedCarLoan);
      }
     }else{
      this.loanApp.isUsed = 'n';
      this.loanApp.principalAmmount = this.newCarLoanAmmount;
    }
    this.loanApplicationService.updateLoanApplication(this.loanApp).subscribe(data =>{
     console.log(data); 
     alert("Data has been updated.");
    });


    // moving on to next module.
    // this.router.navigateByUrl("upload-documents");
  }
}



