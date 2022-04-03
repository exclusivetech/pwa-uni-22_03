import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JTStatus } from './jwt/jwt-auth-token.class';
import { JwtTokenAuthService } from './jwt/jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class TAuthService implements CanActivate {

  constructor(
    private router: Router,
    private jwta: JwtTokenAuthService
  ) { }

  /**
   * 
   * @param route 
   * @param state 
   * @returns
   * 
   * es: route._routerstate.url arriva route completa next
   * uguale a
   *     state.url
   * per controllare cosa arriva
   * console.log('TAuthService::canActivate', route, state);
   * 
   * se non autenticato o per ridirigere
   * this.router.navigate(['auth/login']);
   * versione da 10 passo direttamente UrlTree -> this.router.parseUrl('nroute/rou')
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    console.log('TAuthService::canActivate', route, state);
    // per ora sempre tutto bene
    // return of(<boolean>true);
    // se male
    // this.router.navigate(['auth/login']);
    // return of(<boolean>false);

    /* non funziona
    this.jwta.isAuthenticated().subscribe(isAuth => {
      if (!isAuth) {
        this.router.navigate(['auth/login']);
        console.log('qui::::', isAuth);
        return isAuth;
      } else {
        console.log('o qui::::', isAuth);
        return isAuth;
      }
    });*/

    // return from observable -> https://stackoverflow.com/questions/38291783/how-to-return-value-from-function-which-has-observable-subscription-inside

    return new Promise(resolve => {
      this.jwta.isAuthenticated().pipe(
        // take(1)
      ).subscribe(
        (isAuth: JTStatus) => {

          const nexturl = state.url;
          let nroute: string = '';  // poi unire string | boolean
          let auth: boolean = false;

          switch (isAuth) {
            case 'LOGIN':
              if (nexturl !== '/auth/login') {
                nroute = '/auth/login';
              } else {
                auth = true;
              }
              break;
            case 'LOGOUT':
              if (nexturl !== '/auth/login') {
                nroute = '/auth/login';
              } else {
                auth = true;
              }
              break;
            case 'OTP':
              if (nexturl !== '/auth/otp') {
                nroute = '/auth/otp';
              } else {
                auth = true;
              }
              break;
            case 'AUTH': auth = true;
              break;
          }
          if (auth) {
            resolve(auth);
            // se true
            // se sono loggato ma su pagina login/otp vado dashboard
            /* if (nexturl === '/auth/login' || nexturl === '/auth/otp') {
              resolve(this.router.parseUrl('/pages/dashboard'));
            } else {
              
            } */
          } else {
            // se route -> string
            resolve(this.router.parseUrl(nroute));
          }
          //  resolve(res);
          /*   if (isAuth) {
               // this.router.navigate(['pages/dashboard']);
             } else {
               // this.router.navigate(['auth/login']);
             }
           // resolve(isAuth);
           resolve(this.router.parseUrl('auth/login')); */
        });
    });




  }
}
