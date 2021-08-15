import { Component, OnInit } from '@angular/core';
import { Personalinfo } from '../Models/personalinfo';
import { ApiCallService } from '../Services/api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
})
export class PersonalDetailsComponent implements OnInit {
  user!: Personalinfo;

  constructor(public service: ApiCallService,
            public router:Router) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('userid') != null) {
      this.user = new Personalinfo();
      this.service.getById(Number(sessionStorage.getItem('userid'))).subscribe((data: Personalinfo) => {
        console.log(data);
        this.user = data;
      });
    }
  }


  next(){
    this.router.navigateByUrl("../employment-details");
  }
}
