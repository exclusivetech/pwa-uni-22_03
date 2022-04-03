import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OtpComponent } from './otp/otp.component';



@NgModule({
  
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    LogoutComponent,
    OtpComponent
  ]
})
export class AuthModule { }
