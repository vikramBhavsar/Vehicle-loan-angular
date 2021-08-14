import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControlName,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginForm } from '../Models/login-form';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit 
{
  public login1: LoginForm[]=[];
  public popup:boolean=false;
 login:LoginForm[]=[];
  //login!: LoginForm ;
  loginform = new FormGroup({
    email:new FormControl('',[
      Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  })
  constructor( private authService: AuthenticationService,
    private router: Router) { }
  
    ngOnInit(): void {
      /*this.authService.getbyId(this.router.snapshot.params['uid']).subscribe((data)=>{
         this.login=data;
        console.log(this.login.uid); 
    })*/
      
    this.authService.getAll().subscribe((data)=>
    {
      this.login=data;
      
    })
  }
    get email1()
    {
      return this.loginform.get('email');
    }
    get password1()
    {
      return this.loginform.get('password');
    }
onSubmit()
  {
  
       
          console.log(this.loginform.value.email)
        
          this.login1= this.login.filter(e=>e.emailId==this.loginform.value.email)
          if(this.login1.length==0)
          {
            this.popup=true;
            console.log('wrong email');
          }
          else
          {
            console.log(this.login1);
            if(this.login1[0].apassword==this.loginform.value.password)
            {
              console.log("login successful");
              //
              //this.router.navigateByUrl('home');
              console.log(this.login1[0].uid);
            }
            else
              {
                this.popup=true;
                console.log("login failed");
              }  
          }
          
          
      } 
         
    
    
      
  
   
  

    
   
  
  //   this.authService.user-login(this.loginform.value)
   
    

}

