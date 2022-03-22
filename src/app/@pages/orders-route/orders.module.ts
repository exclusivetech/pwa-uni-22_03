import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class OrdersModule { }
