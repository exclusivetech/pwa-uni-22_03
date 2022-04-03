import { Component, OnInit } from '@angular/core';
import { JwtTokenAuthService } from 't-auth';

@Component({
  selector: 'ext-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private jwta: JwtTokenAuthService
  ) { }

  ngOnInit(): void {
    this.jwta.setDebug(false);
  }

}
