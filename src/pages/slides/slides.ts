import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { SigninPage } from '../signin/signin'
/*
  Generated class for the Slides page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})
export class SlidesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesPage');
  }
  gotoLoginPage(){
    this.navCtrl.push(SigninPage);
  }
}
