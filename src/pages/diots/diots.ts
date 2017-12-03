import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Provider
import { DiotsProvider } from "../../providers/diots/diots";

//importamos DiotPage
import {DiotPage} from "../diot/diot";

@Component({
  selector: 'page-diots',
  templateUrl: 'diots.html'
})
export class DiotsPage {
  diots: any[] = [];
  constructor(public navCtrl: NavController, 
              public _dp: DiotsProvider) {

    this.diots = this._dp.getAll();

  }

  irDiotPage( diot: any ){
    console.log( diot );
    this.navCtrl.push( DiotPage, { 'diot': diot } );
  }

}
