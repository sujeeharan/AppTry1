import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/*
  Generated class for the Saloons page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-saloons',
  templateUrl: 'saloons.html'
})


export class SaloonsPage {
 
   //Salons = [{name:'something',address: 'somewhere',number: 21321}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaloonsPage');
  }
  gotoProfile(){
    this.navCtrl.push(ProfilePage);
  }
}
