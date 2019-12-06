import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'profile',
      url: 'profile',
      icon: 'contact'
    },
    // {
    //   title: 'list',
    //   url: '/list',
    //   icon: 'list'
    // },
    {
      title: 'Add Club',
      url: 'add-club',
      icon: 'list'
    },
    {
      title: 'Add Event',
      url: 'add-event',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService : AuthService
  ) {
   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  log() {
    this.authService.logout();
  }
  ngOnInit() {
    this.initializeApp();
  }
}
