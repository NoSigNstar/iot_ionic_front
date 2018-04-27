import { Injectable } from '@angular/core';
import {Api} from "../api/api";
import SailsSocket from "sails-socket"
import { fromPromise } from 'rxjs/observable/fromPromise';



/*
  Generated class for the BabyfootProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BabyfootProvider {

    constructor(public api: Api) {
    }

    getAll() {

        //Sails socket returns a promise, as we want to detect any changes on the tables we need to turn it into an observable
        // in order to do that we suse the fromPromise function from Observable.
        //We use the socket get instead of a normal http get in order to open the websocket.
        return fromPromise(SailsSocket.get('/babyfoot'));
    }
}
