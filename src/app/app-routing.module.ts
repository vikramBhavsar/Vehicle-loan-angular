import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ClientdetailsComponent } from './clientdetails/clientdetails.component';
import { HomeComponent } from './home/home.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { EligibityCheckComponent } from './eligibity-check/eligibity-check.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


const routes: Routes = [{ path: 'home',component:HomeComponent},
{ path: 'about',component:HomeComponent},
{ path: 'contact',component:HomeComponent},
{ path: 'EMI_calculator',component:EmicalculatorComponent},
{ path: 'register',component:HomeComponent},
{ path: 'apply_loan',component:HomeComponent},
{ path: 'user_login',component:UserLoginComponent},
{ path: 'adminlogin',component:AdminloginComponent},
{ path: 'admindashboard',component:AdmindashboardComponent},
{ path: 'clientdetails',component:ClientdetailsComponent},
{ path: 'register',component:UserRegistrationComponent},
{ path: 'apply_loan',component:LoanApplicationComponent,
  children:[
    {path:'personal-details',component:PersonalDetailsComponent},
    {path:'check-eligibility',component:EligibityCheckComponent},
    {path:'vehicle-details',component:VehicleDetailsComponent},
    {path:'vehicle-details',component:VehicleDetailsComponent},
  ]},
{ path: 'user_login',component:UserDashboardComponent},
{ path: 'admin_login',component:AdmindashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
