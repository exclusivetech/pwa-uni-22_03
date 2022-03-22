import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { StatisticsModule } from './orders/statistics/statistics.module';

@NgModule({
  declarations: [
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    StatisticsModule
  ]
})
export class OrdersModule { }
