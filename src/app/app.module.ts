import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
import { EligibityCheckComponent } from './eligibity-check/eligibity-check.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdmindashboardComponent,
    EligibityCheckComponent,
    HomeComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonToggleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
