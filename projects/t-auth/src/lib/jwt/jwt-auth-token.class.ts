export enum JTStatus {
  auth = 'AUTH',
  login = 'LOGIN',
  logout = 'LOGOUT',
  otp = 'OTP'
}

export interface JToken {
  Header: {
    alg: string,
    typ: string
  },
  Payload: {
    sub: string,
    name: string,
    admin: string
  },
  Signature: {
    HMACSHA256: string
  }
}

export class JwtAuthToken {
  // uso interno
  auth: JTStatus = JTStatus.logout; // inizializzo fuori
  lurl: string = '';   // last visited url
  role: string = 'ADMIN' || 'USER';

  // token jwt vero e proprio ### TODO
  token: JToken = {

    Header: {
      alg: '',
      typ: ''
    },
    Payload: {
      sub: '',
      name: '',
      admin: ''
    },
    Signature: {
      HMACSHA256: ''
    }
  }

};