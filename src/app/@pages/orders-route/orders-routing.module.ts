import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './orders/manage/manage.component';
import { OrdersComponent } from './orders/orders.component';
import { StatisticsComponent } from './orders/statistics/statistics.component';

const routes: Routes = [{
  path: '',
  component: OrdersComponent,
  children: [
    {
      path: 'statistics',
      component: StatisticsComponent
      // canActivate: [PagesAuthGuard],
      /* loadChildren: () => import('./orders/statistics/statistics.module')
        .then(r => r.StatisticsModule), */
    },
    {
      path: 'manage',
      component: ManageComponent
      // canActivate: [PagesAuthGuard],
      /* loadChildren: () => import('./orders/manage/manage.module')
        .then(r => r.ManageModule), */
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {
}
