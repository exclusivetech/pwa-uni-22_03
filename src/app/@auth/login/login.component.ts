import { Component, OnInit } from '@angular/core';
import { JwtTokenAuthService } from 't-auth';

@Component({
  selector: 'ext-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private jwta: JwtTokenAuthService
  ) { }

  ngOnInit(): void {
  }



  /**
   * solo per debug
   */
  loginOK() {
    console.log('debug login OK');
    this.jwta.setDebug(true);
  }

  loginOTP() {
    console.log('debug login OK');
    this.jwta.setDebugOTP(true);
  }

  loginNO() {
    console.log('debug login NO');
    this.jwta.setDebug(false);
  }

}
