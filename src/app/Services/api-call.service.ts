import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmploymentDetailsTbl } from '../Models/employment-details-tbl';
import { Personalinfo } from '../Models/personalinfo';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  private ApiUrl="http://localhost:30623/api"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }

  create(employee:any): Observable<EmploymentDetailsTbl> {
    return this.httpClient.post<EmploymentDetailsTbl>(this.ApiUrl + '/Employee/', JSON.stringify(employee), this.httpOptions)    
  } 

  getById(id:any): Observable<Personalinfo> {
    return this.httpClient.get<Personalinfo>(this.ApiUrl + '/PersonalInfo/' + id)
   
  }
}
