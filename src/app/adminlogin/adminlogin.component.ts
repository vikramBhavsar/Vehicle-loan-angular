import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminlogin! : FormGroup;
  constructor(private router: Router,private activate:ActivatedRoute) { 
    this.adminlogin=new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    });
  }
  get email1()
  {
    return this.adminlogin.get('email');
  }
  get password1()
  {
    return this.adminlogin.get('password');
  }
OnSubmit():void
{
  if(this.adminlogin.get('email')?.value=='admin' && this.adminlogin.get('password')?.value=='admin123')
  {
    console.log('successful');
    this.router.navigateByUrl('/admindashboard');
    
  }
  else{
    alert('Error! Check your email id and password');
  }
}
  ngOnInit(): void {
  }

}
