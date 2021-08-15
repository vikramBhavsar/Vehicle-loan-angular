import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientdetailsComponent } from './clientdetails/clientdetails.component';
import { HomeComponent } from './home/home.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { EligibityCheckComponent } from './eligibity-check/eligibity-check.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';


import { LoanOfferComponent } from './loan-offer/loan-offer.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { EmploymentDetailsComponent } from './employment-details/employment-details.component';
import { ListOfLoanApplicationComponent } from './list-of-loan-application/list-of-loan-application.component';
import { DetailLoanApplicationComponent } from './detail-loan-application/detail-loan-application.component';
import { ListOfApprovedApplicationComponent } from './list-of-approved-application/list-of-approved-application.component';
import { ListOfRejectedApplicationComponent } from './list-of-rejected-application/list-of-rejected-application.component';

const routes: Routes = [{ path: 'home',component:HomeComponent},
{ path: 'about',component:HomeComponent},
{ path: 'contact',component:HomeComponent},
{ path: 'EMI_calculator',component:EmicalculatorComponent},
{ path: 'check-eligibility',component:EligibityCheckComponent},
{ path: 'detail-loan-application/:id',component:DetailLoanApplicationComponent},
{ path: 'user_login',component:UserDashboardComponent},
{ path: 'admin_login',component:AdmindashboardComponent,
  children:[
    { path:'client-details',component:ClientdetailsComponent},
    { path:'loan-application-list',component:ListOfLoanApplicationComponent},
    { path:'approved-list',component: ListOfApprovedApplicationComponent},
    { path:'rejected-list',component:ListOfRejectedApplicationComponent}
  ]
},
{ path: 'user_login',component:UserLoginComponent},
// { path: 'admin_login',component:HomeComponent},
{ path: 'register',component:UserRegistrationComponent},
{ path: 'apply_loan',component:LoanApplicationComponent,
  children:[
    {path:'personal-details',component:PersonalDetailsComponent},
    {path:'employment-details',component:EmploymentDetailsComponent},
    {path:'vehicle-details',component:VehicleDetailsComponent},
    {path:'loan-offers',component:LoanOfferComponent},
    {path:'vehicle-details',component:VehicleDetailsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
