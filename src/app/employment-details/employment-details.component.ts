import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { FormControl} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmploymentDetailsTbl } from '../Models/employment-details-tbl';
import { ApiCallService } from '../Services/api-call.service';

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.css']
})
export class EmploymentDetailsComponent implements OnInit {

  employee!:EmploymentDetailsTbl;
  employeeform!:FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public service: ApiCallService
    ) { }
   
    ngOnInit()
  {
    this.employeeform = this.fb.group({
    toe:[' ',Validators.required],
    salary: [' ',[Validators.required,Validators.min(300000)]],
    existing_emi: [],
    emi: []    
  }) 
}
 
  get status()
  {
    return this.employeeform.get('existing_emi')?.value;
  }

  get Salary()
  {
    return this.employeeform.get("salary");
  }

  get Emi()
  {
    return this.employeeform.get("emi");
  }

  get Toe()
  {
    return this.employeeform.get("toe");
  }

  onSubmit()
  {
    this.employee=new EmploymentDetailsTbl();
    this.employee.toeid=Number(this.Toe?.value);
    this.employee.uid=1;
    this.employee.yearlyIncome=this.Salary?.value;
    this.employee.existingEmiMonthly=this.Emi?.value;
    console.log(this.employee);
    console.log(this.employeeform.value);
    this.service.create(this.employee).subscribe(res => {
      console.log(res)
      console.log('Employee created!')
     // this.router.navigateByUrl('/home/')
    }); 
    this.employeeform.get("emi")?.reset();
  }
}

