import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AppComponent } from './app.component';
import { EligibityCheckComponent } from './eligibity-check/eligibity-check.component';
import { HomeComponent } from './home/home.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { UDDetailsComponent } from './uddetails/uddetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EmploymentDetailsComponent } from './employment-details/employment-details.component';
import { ClientdetailsComponent } from './clientdetails/clientdetails.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { LoanOfferComponent } from './loan-offer/loan-offer.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { ListOfLoanApplicationComponent } from './list-of-loan-application/list-of-loan-application.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalDetailsComponent,
    EmicalculatorComponent,
    VehicleDetailsComponent,
    UDDetailsComponent,
    AdmindashboardComponent,
    EligibityCheckComponent,
    HomeComponent,
    UserDashboardComponent,
    EmploymentDetailsComponent,
    ClientdetailsComponent,
    LoanApplicationComponent,
    LoanOfferComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    AdminRegistrationComponent,
    PaymentGatewayComponent,
    ListOfLoanApplicationComponent,
    PaymentGatewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
