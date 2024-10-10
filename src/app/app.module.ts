import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestCardComponent } from './components/request-card/request-card.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { VacationRequestComponent } from './components/vacation-request/vacation-request.component';
import { PagerComponent } from './components/pager/pager.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LowerRequestCardComponent } from './components/lower-request-card/lower-request-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    RequestCardComponent,
    ImageSliderComponent,
    VacationRequestComponent,
    PagerComponent,
    EmployeeDetailsComponent,
    EmployeeProfileComponent,
    ProfileComponent,
    LowerRequestCardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
