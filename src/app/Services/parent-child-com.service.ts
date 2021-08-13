import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentChildComService {

    // Observable string sources
  private vehicleIdAnnounceSource = new Subject<string>();
  private callForLoanAnnounceSource = new Subject<string>();

  vehicleAnnounced$ = this.vehicleIdAnnounceSource.asObservable();
  callForLoan$ = this.callForLoanAnnounceSource.asObservable();

  announceVehicleID(id:string){
    this.vehicleIdAnnounceSource.next(id);
  }

  callForLoanApplicationId(){
    this.callForLoanAnnounceSource.next('0');
  }

  constructor() { }
}
