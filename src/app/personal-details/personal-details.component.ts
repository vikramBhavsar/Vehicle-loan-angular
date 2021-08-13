import { Component, OnInit } from '@angular/core';
import { Personalinfo } from '../Models/personalinfo';
import { ApiCallService } from '../Services/api-call.service';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  user!:Personalinfo
  
  constructor( public service: ApiCallService) { }

  ngOnInit(): void  {
    this.user=new Personalinfo();
    this.service.getById(1).subscribe((data: Personalinfo)=>{
      console.log(data)
      this.user = data;
  }

)  
}
}
