import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Importamos Pagina Diots
import { DiotsPage } from "../diots/diots"
 
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})

export class SettingPage {

  url: String = window.localStorage.getItem("url") !== null ? window.localStorage.getItem("url"): "";
  usr: String = window.localStorage.getItem("usr") !== null ? window.localStorage.getItem("usr"): "";
  pss: String = window.localStorage.getItem("pss") !== null ? window.localStorage.getItem("pss"): "";

  configuracion:any = {
    url: this.url,
    usr: this.usr,
    pss: this.pss
  };

  constructor(public navCtrl: NavController) {

  }

  Grabar_Configuracion(){
    window.localStorage.setItem("url", this.configuracion.url);
    window.localStorage.setItem("usr", this.configuracion.usr);
    window.localStorage.setItem("pss", this.configuracion.pss);   
    console.log(this.configuracion); 
    this.navCtrl.push( DiotsPage );
  }

}
