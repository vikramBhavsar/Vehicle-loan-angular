import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ClientdetailsComponent } from './clientdetails/clientdetails.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: 'home',component:HomeComponent},
{ path: 'about',component:HomeComponent},
{ path: 'contact',component:HomeComponent},
{ path: 'EMI_calculator',component:HomeComponent},
{ path: 'register',component:HomeComponent},
{ path: 'apply_loan',component:HomeComponent},
{ path: 'user_login',component:HomeComponent},
{ path: 'admin_login',component:HomeComponent},
{ path: 'admindashboard',component:AdmindashboardComponent},
{ path: 'clientdetails',component:ClientdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
