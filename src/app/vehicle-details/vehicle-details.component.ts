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
    this.ex_showroom_price = ["₹ 34.99-48.89 Lakh","₹ 35 Lakh","₹ 43.19-47.61 Lakh",
    "₹ 57.08-61.81 Lakh","₹ 80.49 Lakh"] 
   }

  ngOnInit(): void {
  }

  choiceSelected(selectedValu:string){
    alert(selectedValu);
  }

  getChar() : String{
    return this.selectedvalue; 
}
}
