import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
carmakearray:string[]; 
selectedvalue!:string;
ex_showroom_price!:string[]; 

  constructor() {
    this.carmakearray = ["Audi","BMW","Chevrolet","Fiat","Ford","Honda","Hyundai","Mercedes"];
   }

  ngOnInit(): void {
  }
  getChar() : String{
    return this.selectedvalue; 
}
}
