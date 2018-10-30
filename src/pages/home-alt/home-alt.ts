import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { AlertController } from 'ionic-angular';
import { WidgetsPage } from '../widgets/widgets';
import { RecsportsPage } from '../recsports/recsports';
import { DiningPage } from '../dining/dining';
import { CcrbPage } from '../ccrb/ccrb';
import { GreenehooverPage } from '../greenehoover/greenehoover';
import { NorthquadPage} from '../northquad/northquad';
import { MorePage} from '../more/more';
import { HomePage } from '../home/home';

/**
 * Generated class for the HomeAltPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-alt',
  templateUrl: 'home-alt.html',
})
export class HomeAltPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeAltPage');
  }

  public goToWidgets() {
    this.navCtrl.push(WidgetsPage);
  }

  public goToRecSports() {
    this.navCtrl.push(RecsportsPage);
  }

  public goToDining(){
    this.navCtrl.push(DiningPage);
  }

  public goToCCRB(){
    this.navCtrl.push(CcrbPage);
  }

  public goToGreeneHoover(){
    this.navCtrl.push(GreenehooverPage);
  }

  public goToNorthQuad(){
    this.navCtrl.push(NorthquadPage);
  }

  public goToMore(){
    this.navCtrl.push(MorePage);
  }

  public goToHome(){
    this.navCtrl.push(HomePage);
  }

}
