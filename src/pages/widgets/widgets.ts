import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-widgets',
  templateUrl: 'widgets.html'
})

export class WidgetsPage {

  constructor(
    public navCtrl: NavController
  ) { }

  // doAlert() {
  //   let alert = this.alerCtrl.create({
  //     title: 'Did You Know?',
  //     message: '<p>Magic Bus by DoubleMap is also available as an app. Would you like to download the app?</p><p>We won\'t ask you again.</p>',
  //     buttons: [
  //       {
  //         text: 'Download the App',
  //         handler:() => {
  //           console.log('Go to app/store');
  //         }
  //       },
  //       {
  //         text: 'Continue to Magic Bus',
  //         handler:() => {
  //           console.log('Continue to MBus Classic');
  //         }
  //       }
  //     ]
  //   });
  //   alert.present()
  // }

}