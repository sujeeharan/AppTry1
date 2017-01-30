import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { SaloonsPage } from '../pages/saloons/saloons';
import { SlidesPage} from '../pages/slides/slides';
import { SigninPage} from '../pages/signin/signin';
import { ServicesPage } from '../pages/services/services';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = SlidesPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

}
