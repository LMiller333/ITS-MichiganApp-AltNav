import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { FiltersPage } from '../filters/filters';



@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})

export class SearchPage {

  searchType: string = "places";

  constructor(public navCtrl: NavController, public modalCtrl:ModalController) {
  }

  public presentFilterModal() {
    const modal = this.modalCtrl.create(FiltersPage);
    modal.present();
  }

}
