import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WidgetsPage} from '../widgets/widgets';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {

  }

  public goToWidgets() {
    this.navCtrl.push(WidgetsPage);
  }

  public goToFavorites(){
    this.navCtrl.push(FavoritesPage);
  }

}
