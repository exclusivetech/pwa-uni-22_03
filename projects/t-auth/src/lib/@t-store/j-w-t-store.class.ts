/**
 * base class  to states implementation
 */

import { BehaviorSubject, map, Observable } from "rxjs";
import { JwtAuthToken } from "../jwt/jwt-auth-token.class";



/**
 * BehaviorSubject now always array []
 * so can initialize without value only with empty array []
 * but transparent to app
 */
export class JWTStore {

    private _store$Subject: BehaviorSubject<JwtAuthToken>;
    // now init with map private store$Observer: Observable<T>;
    /* private store$Observer: Observable<JwtAuthToken> = this._store$Subject.asObservable()
        .pipe(
            // map(sElem => sElem[0] )
            ); */

    constructor(
        // nome del token su local
        private _localName: string,
        initialState?: JwtAuthToken
    ) {
        const kval = localStorage.getItem(this._localName);
        // se val iniziale e localstore vuoto o no ... applico
        if (initialState) {
            this.write(initialState);
            this._store$Subject = new BehaviorSubject<JwtAuthToken>(initialState);
        } else {
            if (kval) {
                this._store$Subject = new BehaviorSubject<JwtAuthToken>(JSON.parse(kval));
            } else {
                // non ho niente
                const njwt = new JwtAuthToken();
                this.write(njwt);
                this._store$Subject = new BehaviorSubject<JwtAuthToken>(njwt);
            }
        }
    }

    // poi: Observable<NbAuthToken>
    read($callback?: (store: JwtAuthToken) => void): JwtAuthToken {

        const kval = localStorage.getItem(this._localName);
        let tReturn: JwtAuthToken;
        if (kval) {
            tReturn = JSON.parse(kval);
        } else {
            tReturn = new JwtAuthToken();
        }
        if ($callback) {
            $callback(tReturn);
        }
        return tReturn;
    }

    write(nextStore: JwtAuthToken, $callback?: (store: JwtAuthToken) => void): JwtAuthToken {
        localStorage.setItem(this._localName, JSON.stringify(nextStore));
        if ($callback) {
            $callback(nextStore);
        }
        return nextStore;
    }




}
