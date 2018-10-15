import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ngSwitch} from '@angular/core';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  searchType: string = "places";

  constructor(public navCtrl: NavController) {
  }

}
