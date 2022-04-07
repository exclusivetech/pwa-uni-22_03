import { Component, OnInit } from '@angular/core';
import { HelloReply, HelloRequest } from 'src/app/@grpc/helloworld_pb';
import { GreeterClient, ServiceError } from 'src/app/@grpc/helloworld_pb_service';
import { JwtTokenAuthService } from 't-auth';

@Component({
  selector: 'ext-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private grpc: GreeterClient;

  constructor(
    private jwta: JwtTokenAuthService,
  ) {
    this.grpc = new GreeterClient(
      'http://localhost:4200');
  }

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

  /**
   * prova chiamata gRPC vedere grpc-cli-22.04
   */
  grpcCall() {
    const request = new HelloRequest();
    request.setName('pedrito');

    this.grpc.sayHello(request, (error: ServiceError | null, response: HelloReply | null) => {
      console.log('arriva::::', error, response, response?.getMessage());
    });


  }

}
