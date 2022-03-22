import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersModule } from './orders.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    OrdersModule
  ]
})
export class OrdersRouteModule { }
