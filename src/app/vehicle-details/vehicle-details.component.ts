import { Component, OnInit } from '@angular/core';
import { VehicleDetailss } from '../models/vehicle-detailss';
import { ApiCallService } from '../api-call.service';
import { LoanApplication } from '../models/loan-application';
import { Output, EventEmitter } from '@angular/core';
import { ParentChildComService } from '../services/parent-child-com.service';
import { LoanApplicationService } from '../services/loan-application.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
})
export class VehicleDetailsComponent implements OnInit {

  // event emiter to emit the vehicle id to parent component i.e loan application
  @Output() newItemEvent = new EventEmitter<number>();


  carMakeList: VehicleDetailss[] = [];
  carModelList:VehicleDetailss[] = [];
  carPriceList:VehicleDetailss[] = [];
  afterPriceSelect:VehicleDetailss[] = [];

  vehicleID!:number;

  selectedvalue!: string;
  selectedvalue1!: string;

  scarMake!: string;
  scarModel!: string;
  s_exShowroomPrice!: string;

  constructor(public service: ApiCallService,
              private loanApplicationService:LoanApplicationService,
              private componentCommunication:ParentChildComService
    ) {}

  ngOnInit(): void {
    console.log('hii');
    this.service.getCarMake().subscribe((data: VehicleDetailss[]) => {
      console.log(data);
      this.carMakeList = data;
    });
    //this.VehicleDetailsTbl = [{"carMakeId" : 1,"carMake":"Audi","carModel":"Audi A6","vId":1,"exShowroomPrice":6000000},{"carMakeId" : 2,"carMake":"Hyundai","carModel":"Hyundai AS","vId":2,"exShowroomPrice":7000000}]
  }

  choiceSelected(event: any) {
    this.selectedvalue;
    console.log("Below is selected car make ");
    console.log(event.target.value);
    this.service
      .getbyId(event.target.value)
      .subscribe((data: VehicleDetailss[]) => {
        console.log(data);
        this.carModelList = data;

        this.scarMake = this.selectedvalue;
      });
  }

  modelSelected(event: any) {
    this.selectedvalue1;
    console.log("VEHICLE ID IS")
    console.log(event.target.value);
    this.service
      .getcarModel(event.target.value)
      .subscribe((data: VehicleDetailss[]) => {
        console.log(data);
        this.carPriceList = data;
        this.s_exShowroomPrice;
        this.scarModel = this.selectedvalue1;
      });
  }

  priceSelected(event: any) {
    this.selectedvalue1;
    console.log("Showing selected ex show room price");
    console.log('Showing ID');
    this.vehicleID = event.target.value
    console.log(this.vehicleID);
    this.service
      .getshowroomprice(event.target.value)
      .subscribe((data: VehicleDetailss[]) => {
        console.log(data);
        this.afterPriceSelect = data;
      });
  }


  makeLoanObject(){
    alert("sending data");
    let loanApplication = new LoanApplication(0,1,Number(this.vehicleID),0,0,0,'y',0,1);
    console.log(loanApplication);
    this.loanApplicationService.createLoanApplication(loanApplication).subscribe(data=>{
      this.componentCommunication.announceVehicleID(data.lappid.toString());
    });
    
  }
}
