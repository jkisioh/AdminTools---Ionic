import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Data } from './providers/data/data';
import { LocationService } from './providers/location/location.service';
import { FeedbackService } from './providers/feedback/feedback.service';

import { Home } from './pages/home/home';
import { County } from './pages/county/county';
import { Feedback } from './pages/feedback/feedback';

@Component({
  templateUrl: 'build/app.html',
  providers: [Data,LocationService, FeedbackService]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>

  constructor(private dataService: Data, private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home },
      { title: 'Locations', component: County },
      { title: 'Users', component: County },
      { title: 'Feedback', component: Feedback },
      { title: 'Report', component: County },
      { title: 'Report 2', component: County },
      { title: 'Settings', component: County },
      { title: 'About', component: County }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //connect to db
      this.dataService.initDB();
      //load status bar
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
