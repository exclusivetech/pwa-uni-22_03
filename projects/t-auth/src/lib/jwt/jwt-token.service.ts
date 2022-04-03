import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JWTStore } from '../@t-store/j-w-t-store.class';
import { JTStatus, JwtAuthToken } from './jwt-auth-token.class';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenAuthService {

  

  // nome local store
  private tjwt: JWTStore = new JWTStore('ext-local');

  constructor() {
    // this.tjwt.storeSet(this.get());
    console.log('STARTED->JwtTokenService:::', this);
  }

  // poi: Observable<NbAuthToken>
  /* private get(): JwtAuthToken {
    const kval = localStorage.getItem(this.localName);
    if (kval) {
      return JSON.parse(kval);
    } else {
      return new JwtAuthToken();
    }
  } */

  private set(value: JwtAuthToken): void {
    
  }
  setDebug(_val: boolean): void {
    console.log('setttttt:::', this);
    // this.tokenState.next(_val);
  }
  setDebugOTP(_val: boolean): void {
    // recupero jwt
    const jwt = this.tjwt.read();
    jwt.auth = JTStatus.otp;
    this.tjwt.write(jwt);
    console.log('setttttt:::', this);
    // this.tokenState.next(_val);
  }

  /*
  private clear(): void {
    localStorage.removeItem(this.localName);
  }
  */

  /**
   * qui funzioni per interazione esterna
   */

  // tokenChange(): Observable<NbAuthToken>;

  isAuthenticated(): Observable<JTStatus> {
    // recupero jwt
    const jwt = this.tjwt.read();
    console.log('!!!! non forzo a true', this.tjwt.read(), this);
    // return of(this.tjwt.auth);
    return of(jwt.auth);
  }


}

/* eliminare solo come promemoria funzioni da implementare */
/*
export declare class NbTokenService {
  protected tokenStorage: NbTokenStorage;
  protected token$: BehaviorSubject<NbAuthToken>;
  constructor(tokenStorage: NbTokenStorage);
  / **
   * Publishes token when it changes.
   * @returns {Observable<NbAuthToken>}
   * /
  tokenChange(): Observable<NbAuthToken>;
  / **
   * Sets a token into the storage. This method is used by the NbAuthService automatically.
   *
   * @param {NbAuthToken} token
   * @returns {Observable<any>}
   * /
  set(token: NbAuthToken): Observable<null>;
  / **
   * Returns observable of current token
   * @returns {Observable<NbAuthToken>}
   * /
  get(): Observable<NbAuthToken>;
  / **
   * Removes the token and published token value
   *
   * @returns {Observable<any>}
   * /
  clear(): Observable<null>;
  protected publishStoredToken(): void;
  static ɵfac: ɵngcc0.ɵɵFactoryDef<NbTokenService>;
  static ɵprov: ɵngcc0.ɵɵInjectableDef<NbTokenService>;
}
*/





/*
export declare class NbAuthService {
    protected tokenService: NbTokenService;
    protected strategies: any;
    constructor(tokenService: NbTokenService, strategies: any);
    / **
     * Retrieves current authenticated token stored
     * @returns {Observable<any>}
     * /
     getToken(): Observable<NbAuthToken>;
     / **
      * Returns true if auth token is present in the token storage
      * @returns {Observable<boolean>}
      * /
     isAuthenticated(): Observable<boolean>;
     / **
      * Returns true if valid auth token is present in the token storage.
      * If not, calls the strategy refreshToken, and returns isAuthenticated() if success, false otherwise
      * @returns {Observable<boolean>}
      * /
     isAuthenticatedOrRefresh(): Observable<boolean>;
     / **
      * Returns tokens stream
      * @returns {Observable<NbAuthSimpleToken>}
      * /
     onTokenChange(): Observable<NbAuthToken>;
     / **
      * Returns authentication status stream
      * @returns {Observable<boolean>}
      * /
     onAuthenticationChange(): Observable<boolean>;
     /**
      * Authenticates with the selected strategy
      * Stores received token in the token storage
      *
      * Example:
      * authenticate('email', {email: 'email@example.com', password: 'test'})
      *
      * @param strategyName
      * @param data
      * @returns {Observable<NbAuthResult>}
      * /
     authenticate(strategyName: string, data?: any): Observable<NbAuthResult>;
     / **
      * Registers with the selected strategy
      * Stores received token in the token storage
      *
      * Example:
      * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
      *
      * @param strategyName
      * @param data
      * @returns {Observable<NbAuthResult>}
      * /
     register(strategyName: string, data?: any): Observable<NbAuthResult>;
     / **
      * Sign outs with the selected strategy
      * Removes token from the token storage
      *
      * Example:
      * logout('email')
      *
      * @param strategyName
      * @returns {Observable<NbAuthResult>}
      * /
     logout(strategyName: string): Observable<NbAuthResult>;
     / **
      * Sends forgot password request to the selected strategy
      *
      * Example:
      * requestPassword('email', {email: 'email@example.com'})
      *
      * @param strategyName
      * @param data
      * @returns {Observable<NbAuthResult>}
      * /
     requestPassword(strategyName: string, data?: any): Observable<NbAuthResult>;
     / **
      * Tries to reset password with the selected strategy
      *
      * Example:
      * resetPassword('email', {newPassword: 'test'})
      *
      * @param strategyName
      * @param data
      * @returns {Observable<NbAuthResult>}
      * /
     resetPassword(strategyName: string, data?: any): Observable<NbAuthResult>;
     / **
      * Sends a refresh token request
      * Stores received token in the token storage
      *
      * Example:
      * refreshToken('email', {token: token})
      *
      * @param {string} strategyName
      * @param data
      * @returns {Observable<NbAuthResult>}
      * /
     refreshToken(strategyName: string, data?: any): Observable<NbAuthResult>;
     /**
      * Get registered strategy by name
      *
      * Example:
      * getStrategy('email')
      *
      * @param {string} provider
      * @returns {NbAbstractAuthProvider}
      * /
     protected getStrategy(strategyName: string): NbAuthStrategy;
     private processResultToken;
     static ɵfac: ɵngcc0.ɵɵFactoryDef<NbAuthService>;
     static ɵprov: ɵngcc0.ɵɵInjectableDef<NbAuthService>;
 }
 */