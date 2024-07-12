import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { BookingComponent } from './booking/booking.component';
import { BusTicketsComponent } from './bus-tickets/bus-tickets.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BookingsComponent } from './bookings/bookings.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { BusscheduleComponent } from './busschedule/busschedule.component';
import { BuslistComponent } from './buslist/buslist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SucessComponent } from './sucess/sucess.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bus-tickets', component: BusTicketsComponent, canActivate: [AuthGuard] },
  { path: 'booking', component: BookingsComponent },
  { path: 'seats', component: SeatSelectionComponent, canActivate: [AuthGuard] },
  { path: 'busschedule', component: BusscheduleComponent },
  { path: 'buslist', component: BuslistComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sucess', component: SucessComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: '**', redirectTo: '/not-found' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
