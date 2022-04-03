import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TApiModule } from 't-api';
import { TAuthModule } from 't-auth';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TAuthModule,
    TApiModule
  ]
})
export class DashboardRouteModule { }
