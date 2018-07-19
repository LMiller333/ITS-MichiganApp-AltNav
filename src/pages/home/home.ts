import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    public navCtrl: NavController,
    public alerCtrl: AlertController
  ) { }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Did You Know?',
      message: '<p>Magic Bus, provided by DoubleMap, is also available as an app. Would you like to download the app?</p><p>We won\'t ask you again.</p>',
      buttons: [
        {
          text: 'Download Magic Bus App',
          handler:() => {
            console.log('Go to app/store');
          }
        },
        {
          text: 'No Thanks',
          handler:() => {
            console.log('Continue to MBus Classic');
          }
        }
      ]
    });
    alert.present()
  }

}