import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TAuthService } from 't-auth';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: 'login',
      canActivate: [TAuthService],
      component: LoginComponent
    },
    {
      path: 'logout',
      canActivate: [TAuthService],
      component: LogoutComponent
    },
    {
      path: 'otp',
      canActivate: [TAuthService],
      component: OtpComponent
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
export class AuthRoutingModule {
}


