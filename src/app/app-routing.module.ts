import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { EligibityCheckComponent } from './eligibity-check/eligibity-check.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoanOfferComponent } from './loan-offer/loan-offer.component';

const routes: Routes = [{ path: 'home',component:HomeComponent},
{ path: 'about',component:HomeComponent},
{ path: 'contact',component:HomeComponent},
{ path: 'EMI_calculator',component:EmicalculatorComponent},
{ path: 'check-eligibility',component:EligibityCheckComponent},
{ path: 'register',component:UserRegistrationComponent},
{ path: 'apply_loan',component:LoanApplicationComponent,
  children:[
    {path:'personal-details',component:PersonalDetailsComponent},
    {path:'vehicle-details',component:VehicleDetailsComponent},
    {path:'loan-offers',component:LoanOfferComponent},
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
