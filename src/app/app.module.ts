import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FeedPage } from '../pages/feed/feed';
import { SearchPage } from '../pages/search/search';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AccountPage} from '../pages/account/account';
import { WidgetsPage} from '../pages/widgets/widgets';
import { RecsportsPage } from '../pages/recsports/recsports';
import { CcrbPage } from '../pages/ccrb/ccrb';
import { ImsbPage } from '../pages/imsb/imsb';
import { DiningPage } from '../pages/dining/dining';
import { GreenehooverPage } from '../pages/greenehoover/greenehoover';
import { NorthquadPage } from '../pages/northquad/northquad';
import { MorePage } from '../pages/more/more';
import { HomeAltPage } from '../pages/home-alt/home-alt';
import { FavoritesPage } from '../pages/favorites/favorites';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FeedPage,
    SearchPage,
    AccountPage,
    HomePage,
    TabsPage,
    WidgetsPage,
    RecsportsPage,
    CcrbPage,
    ImsbPage,
    DiningPage,
    GreenehooverPage,
    NorthquadPage,
    MorePage,
    HomeAltPage,
    FavoritesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedPage,
    SearchPage,
    AccountPage,
    HomePage,
    TabsPage,
    WidgetsPage,
    RecsportsPage,
    CcrbPage,
    ImsbPage,
    DiningPage,
    GreenehooverPage,
    NorthquadPage,
    MorePage,
    HomeAltPage,
    FavoritesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
