import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { VehicleDetailss } from './Models/vehicle-detailss'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  private ApiUrl = "http://localhost:6969/api/Main";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) 
  { }

  getCarMake(): Observable<VehicleDetailss[]> {
    return this.httpClient.get<VehicleDetailss[]>(this.ApiUrl + '/CarMakeTbl')

}
getbyId(id:any): Observable<VehicleDetailss[]> {
  return this.httpClient.get<VehicleDetailss[]>(this.ApiUrl + '/VehicleDetailsCarMakeId/' + id) 
}

getcarModel(id:any): Observable<VehicleDetailss[]> {
  return this.httpClient.get<VehicleDetailss[]>(this.ApiUrl + '/VehicleDetailsCarModel/' + id) 
}

getshowroomprice(id:any): Observable<VehicleDetailss[]> {
  return this.httpClient.get<VehicleDetailss[]>(this.ApiUrl + '/VehicleDetailsExShowroomPrice/' + id) 
}

}
