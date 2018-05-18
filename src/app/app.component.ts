import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { MainPage, LoginPage, UserPage } from '../pages/pages';
import { Settings } from '../providers/providers';
import { Storage } from '@ionic/storage';

import SailsSocket from 'sails-socket';
import { User } from '../providers/providers';

@Component({
    templateUrl: 'menu.html'
})
export class MyApp {
  rootPage:string;
  username:string;
  team:string;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Login', component: 'LoginPage' },
    { title: 'Signup', component: 'SignupPage' },
    { title: 'Babyfoot', component: 'BabyfootPage' },
    { title: 'User', component: 'UserPage' }
  ];

  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen, private storage: Storage, public user: User) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

      const initialParams = {url: 'http://localhost:1337'};
      SailsSocket.connect(initialParams);
    this.checkLogin();
    this.initTranslate();

    //checkPreviousLogin();
  }

  checkLogin(){
    this.storage.get('token').then((val) => {
      if (val !== null) {
        this.rootPage = UserPage;
        this.storage.get('user').then((val) => {
          this.username = val.username
          this.team = val.idTeam
        })
      } else {
        this.rootPage = LoginPage
      }
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.user.logout();
    this.nav.setRoot(LoginPage);
  }
}
