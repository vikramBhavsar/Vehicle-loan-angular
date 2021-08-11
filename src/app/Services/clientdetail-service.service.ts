import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewClientDetails } from '../Models/view-client-details';

@Injectable({
  providedIn: 'root'
})
export class ClientdetailServiceService {
private ApiUrl="http://localhost:30623/api";
httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
  constructor(private httpClient: HttpClient) { }
  getAll():
  Observable<ViewClientDetails[]>{
    return this.httpClient.get<ViewClientDetails[]>(this.ApiUrl + '/admindashboard')
  }
}
