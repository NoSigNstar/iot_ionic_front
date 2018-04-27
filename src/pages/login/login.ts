import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {Storage} from '@ionic/storage';

import {User} from '../../providers/providers';
import {MainPage} from '../pages';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    // The account fields for the login form.
    // If you're using the username field with or without email, make
    // sure to add it to the type
    account: { email: string, password: string } = {
        email: 'test@example.com',
        password: 'test'
    };

    // Our translated text strings
    private loginErrorString: string;

    constructor(public navCtrl: NavController,
                public user: User,
                public toastCtrl: ToastController,
                public translateService: TranslateService,
                private storage: Storage) {

        this.translateService.get('LOGIN_ERROR').subscribe((value) => {
            this.loginErrorString = value;
        })
    }

    // Attempt to login in through our User service
    doLogin() {

        //Call the login function from the user provider, if succesfull a token is returned and stored in the local storage
        // this token is then sent on each outgoing request
        this.user.login(this.account).subscribe((resp) => {
            if (resp['token']) {
                this.storage.set('token', resp['token']);
            }
            if (resp['user']) {
                this.storage.set('user', resp['user']);
            }
            this.navCtrl.push(MainPage);
        }, (err) => {
            this.navCtrl.push(MainPage);
            // Unable to log in
            let toast = this.toastCtrl.create({
                message: this.loginErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
}
