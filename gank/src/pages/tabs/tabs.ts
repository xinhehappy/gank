import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FrontendPage } from '../frontend/frontend';
import { AndroidPage } from '../android/android';
import { IosPage } from '../ios/ios';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = FrontendPage;
  tab3Root: any = AndroidPage;
  tab4Root: any = IosPage;

  constructor() {

  }
}
