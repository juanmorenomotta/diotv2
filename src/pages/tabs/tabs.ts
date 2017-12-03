import { Component } from '@angular/core';

import { DiotsPage } from '../diots/diots';
import { SettingPage } from '../setting/setting';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = HomePage;
  tab2Root = DiotsPage;
  tab3Root = SettingPage;

  constructor() {

  }
}
