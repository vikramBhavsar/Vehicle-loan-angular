import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  RouterLink,
} from '@angular/router';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';
import { AdminForm } from '../Models/login-form';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent implements OnInit {
  adminlogin!: FormGroup;
  constructor(private router: Router, private activate: ActivatedRoute,
            private authService:AuthenticationService
    ) {
    this.adminlogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get email1() {
    return this.adminlogin.get('email');
  }
  get password1() {
    return this.adminlogin.get('password');
  }

  OnSubmit(): void {

    let adminUser = new AdminForm();
    adminUser.aid = 0;
    adminUser.emailId = this.adminlogin.value['email'];
    adminUser.apassword = this.adminlogin.value['password'];
    adminUser.aname = '';
    console.log(adminUser);

    this.authService.checkAdmin(adminUser).subscribe(data =>{
      if(data != null){
        console.log("user is here");
        console.log(adminUser);
        this.router.navigateByUrl("admin_dashboard");
        sessionStorage.setItem("userid",data.aid.toString());
        sessionStorage.setItem("role",'admin');
        sessionStorage.setItem("aname",data.aname);
      }else{
        alert("Invalid Admin Credentials");
      }
    });

    

    // if (
    //   this.adminlogin.get('email')?.value == 'admin' &&
    //   this.adminlogin.get('password')?.value == 'admin123'
    // ) {
    //   console.log('successful');
    //   this.router.navigateByUrl('/admindashboard');
    // } else {
    //   alert('Error! Check your email id and password');
    // }
  }
  ngOnInit(): void {}
}
