import { Component } from '@angular/core';
import { MorningPage } from '../morning/morning';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MorningPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
