import { Component, OnInit } from '@angular/core';
import { VehicleDetailss } from '../Models/vehicle-detailss';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
VehicleDetailsTbl: VehicleDetailss[] = [];
selectedvalue!: string;
selectedvalue1!:string;
selectedvalue2!:string;

  constructor(public service: ApiCallService) { 
  
   }

   ngOnInit(): void {
     console.log("hii");
  this.service.getCarMake().subscribe((data: VehicleDetailss[])=>{
   console.log(data)
      this.VehicleDetailsTbl = data;
    }
     
   );
    //this.VehicleDetailsTbl = [{"carMakeId" : 1,"carMake":"Audi","carModel":"Audi A6","vId":1,"exShowroomPrice":6000000},{"carMakeId" : 2,"carMake":"Hyundai","carModel":"Hyundai AS","vId":2,"exShowroomPrice":7000000}]
  
}

  choiceSelected(event:any) 
  {
    this.selectedvalue;
    console.log(event.target.value);
    console.log("hello");
     this.service.getbyId(event.target.value).subscribe((data: VehicleDetailss[])=>{
      console.log(data)
      this.VehicleDetailsTbl = data; 
      
    })
    
  
  }
  modelSelected(event:any) 
{
  this.selectedvalue1; 
  console.log(event.target.value);
  console.log("hello");
  this.service.getcarModel(event.target.value).subscribe((data: VehicleDetailss[])=>{
   console.log(data)
  this.VehicleDetailsTbl = data; 
      
   })
}

priceSelected(event:any)
{
  this.selectedvalue2; 
  console.log(event.target.value);
  console.log("hello");
  this.service.getshowroomprice(event.target.value).subscribe((data: VehicleDetailss[])=>{
   console.log(data)
  this.VehicleDetailsTbl = data; 
  })
}
  

}


