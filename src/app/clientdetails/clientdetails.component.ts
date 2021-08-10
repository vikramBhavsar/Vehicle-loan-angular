import { Component, OnInit } from '@angular/core';
import { ViewClientDetails } from '../Models/view-client-details';
import { ClientdetailServiceService } from '../Services/clientdetail-service.service';

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.css']
})
export class ClientdetailsComponent implements OnInit {

  clientdetails: ViewClientDetails[]=[];
  constructor(public service: ClientdetailServiceService) { }     

  ngOnInit(): void {
    this.service.getAll().subscribe((data)=>{
        this.clientdetails=data;
        console.log(data);
    })
  }

}