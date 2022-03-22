import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      // canActivate: [PagesAuthGuard],
      loadChildren: () => import('./dashboard-route/dashboard-route.module')
        .then(r => r.DashboardRouteModule),
    },
    {
      path: 'orders',
      // canActivate: [PagesAuthGuard],
      loadChildren: () => import('./orders-route/orders-route.module')
        .then(r => r.OrdersRouteModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    /* {
      path: '**',
      component: NotFoundComponent,
    },*/
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
