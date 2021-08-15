import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Passwordvalidator } from '../Custom-Validations/PasswordValidator';
import { Logininfo } from '../Models/logininfo';
import { Userinfo } from '../Models/userinfo';
import { UserRegistrationService } from '../Services/user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public sessionStorage = sessionStorage;

  luser!:Logininfo;
  ruser!:Userinfo;

  userregistration=new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    middleName:new FormControl('',Validators.pattern('^[a-zA-Z ]*$')),
    lastName:new FormControl('',Validators.pattern('^[a-zA-Z ]*$')),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('', [Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{1,}$/),Validators.minLength(8)]),
    cpassword:new FormControl('',Validators.required),
    age:new FormControl('',[Validators.required,Validators.min(21),Validators.max(65)]),
    gender:new FormControl(Validators.required),
    mobileNo:new FormControl('',[Validators.required]),
    uaddress:new FormControl('',Validators.required),
    ustate:new FormControl('',Validators.required),
    ucity:new FormControl('',Validators.required),
    pinCode:new FormControl('',Validators.required),
    accountNo:new FormControl()
  },{validators:Passwordvalidator})

  
  constructor(
    private router: Router,
    public service: UserRegistrationService
  ) { }

   ngOnInit(){
   }

  get fname()
  {
    return this.userregistration.get("firstName");
  }

  get mname()
  {
    return this.userregistration.get("middleName");
  }

  get lname()
  {
    return this.userregistration.get("lastName");
  }

  get email1()
  {
    return this.userregistration.get("email");
  }

  get pwd()
  {
    return this.userregistration.get("password");
  }

  get cpwd()
  {
    return this.userregistration.get("cpassword");
  }

  get age1()
  {
    return this.userregistration.get("age");
  }

  get gender1()
  {
    return this.userregistration.get("gender");
  }

  get mobno()
  {
    return this.userregistration.get("mobileNo");
  }

  get address()
  {
    return this.userregistration.get("uaddress");
  }

  get state()
  {
    return this.userregistration.get("ustate");
  }

  get city()
  {
    return this.userregistration.get("ucity");
  }

  get pcode()
  {
    return this.userregistration.get('pinCode');
  }

  get ano()
  {
    return this.userregistration.get("accountNo");
  }

onsubmit()
{
  this.luser=new Logininfo();
  this.ruser=new Userinfo();
  this.luser.emailId=this.email1?.value;
  this.luser.apassword=this.pwd?.value;
  this.ruser.firstName=this.fname?.value;
  this.ruser.lastName=this.lname?.value;
  this.ruser.middleName=this.mname?.value;
  this.ruser.age=this.age1?.value;
  this.ruser.gender=this.gender1?.value;
  this.ruser.mobileNo=this.mobno?.value;
  this.ruser.uaddress=this.address?.value;
  this.ruser.ustate=this.state?.value;
  this.ruser.ucity=this.city?.value;
  this.ruser.pinCode=this.pcode?.value;
  this.ruser.accountNo=this.ano?.value;
  
  this.service.create(this.luser).subscribe(res => {
    console.log(res)
    this.ruser.uid=res.uid;
    console.log(this.ruser.uid);
    console.log(this.ruser);
    console.log('user created!'); 
     this.service.createuser(this.ruser).subscribe(data => {
      console.log(data)
      console.log('userinfo created!')
    }); 
   });   

}
}
