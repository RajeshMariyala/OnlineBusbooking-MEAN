import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BusTicketsComponent } from './bus-tickets/bus-tickets.component';
import { BookingsComponent } from './bookings/bookings.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { BusscheduleComponent } from './busschedule/busschedule.component';
import { BuslistComponent } from './buslist/buslist.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UserlistComponent } from './userlist/userlist.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SucessComponent } from './sucess/sucess.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    NavbarComponent,
  
    SignupComponent,
    LoginComponent,
    BusTicketsComponent,
    BookingsComponent,
    SeatSelectionComponent,
    Navbar1Component,
    BusscheduleComponent,
    BuslistComponent,
    ScheduleComponent,
    UserlistComponent,
    RegisterComponent,
    DashboardComponent,
    SucessComponent,
    AdminloginComponent,
    NotFoundComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
