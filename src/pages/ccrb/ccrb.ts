import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { RecsportsPage } from '../recsports/recsports';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


/**
 * Generated class for the CcrbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ccrb',
  templateUrl: 'ccrb.html',
})
export class CcrbPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public nativePageTransitions: NativePageTransitions, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CcrbPage');
  }

  goToRecSports(){

    this.nativePageTransitions.flip(null);
    this.navCtrl.push(RecsportsPage).then(() => {
      let index = 1;
      this.navCtrl.remove(index);
    });
  }

  openActionSheet(){
    console.log('opening');
    let actionsheet = this.actionSheetCtrl.create({
    buttons:[{
    text: 'Remove Favorite',
    handler: () => {
    console.log("Favorite Clicked");
    }
    },
    {
    text: 'View Building Detail',
    handler: function(){
    console.log("Building Clicked");
    }
    },
    {
      text: 'View on Map',
      handler: function(){
      console.log("Map Clicked");
      }
    },
    {
      text: 'Find Bus Stops Nearby',
      handler: function(){
      console.log("Bus Clicked");
      }
    },
    {
      text: 'Find Parking Nearby',
      handler: function(){
      console.log("Parking Clicked");
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      handler: function(){
      console.log("Cancel Clicked");
      }
    }]
    });
    actionsheet.present();
   }

}
