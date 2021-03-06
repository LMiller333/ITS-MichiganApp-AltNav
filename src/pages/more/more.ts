import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecsportsPage } from '../recsports/recsports';
import { WidgetsPage } from '../widgets/widgets';
import { AfterHoursPage } from '../after-hours/after-hours';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  public goToRecSports() {
    this.navCtrl.push(RecsportsPage);
  }

  public goToWidgets() {
    this.navCtrl.push(WidgetsPage);
  }

  public goToAfterHours() {
    this.navCtrl.push(AfterHoursPage);
  }

}
