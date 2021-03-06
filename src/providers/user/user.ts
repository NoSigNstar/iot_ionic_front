import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { Storage } from '@ionic/storage';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _user: any;
  private _token:any;

  constructor(public api: Api, private storage: Storage) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    //Send data to server
    let seq = this.api.post('api/users/login', accountInfo).share();

    //Subscribe to nay changes on the seq variable
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      this.setCredentials(res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('api/users/signup', accountInfo).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      this.setCredentials(res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
    this.storage.set('token', null);
  }

  /**
   * Process a login/signup response to store user data
   */
  setCredentials(resp) {
    this._user = resp.user;
    this._token = resp.token;
    this.storage.set('user', resp.user);
    this.storage.set('token', resp.token);
  }

  isLoggedIn(){
    return this._token !== null && typeof this._token != 'undefined' ? true : false
  }

  get token(): any {
      return this._token;
  }
}
