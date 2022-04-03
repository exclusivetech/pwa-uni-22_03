import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { TAuthService } from 't-auth';

/* 
const routes: Routes = [
  { path: 'home', component: HomeComponent },
];
*/

export const routes: Routes = [
  {
    path: 'pages',
    canActivate: [TAuthService],
    loadChildren: () => import('./@pages/pages.module')
      .then(r => r.PagesModule),
  },
  {
    path: 'auth',
    // loadChildren: './auth/auth.module#NgxGispAuthModule',
    loadChildren: () => import('./@auth/auth.module')
      .then(r => r.AuthModule),
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  initialNavigation: 'enabledBlocking', // for ssr
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/
