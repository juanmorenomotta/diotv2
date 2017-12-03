import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Llamamos a SettingPage
import { SettingPage } from "../setting/setting";



@Component({
  selector: 'page-diot',
  templateUrl: 'diot.html',
})
export class DiotPage {

  options:any = {};
  payload: String = "";
  presencia:String = "";
  client: any;

  url: String = "";
  usr: String = "";
  pss: String = "";


  sensores:any = {
    luz: false,
    pres: false,
    temp: 0,
    air: 0
  };
  
  diot:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.diot = navParams.data.diot;

    console.log(this.diot);

    if(window.localStorage.getItem("url") !== null) {
      this.url = window.localStorage.getItem("url");
      this.usr = window.localStorage.getItem("usr");
      this.pss = window.localStorage.getItem("pss");
      this.ConexionMQTT();
    } else {
        console.log("No existe Servidor configurado, ir a Configuración");
        this.navCtrl.push( SettingPage );
    }
  }

  LuzChange(){
    console.log("Cambio Luz");

    var valor = ""
    valor = this.sensores.luz ? "on" : "off";
    console.log("Estoy en el topico: "+this.diot.topic + '/luz/set = ' + valor);
    //this.client.publish(this.diot.topic + '/luz/set', valor);    
  }

  ConexionMQTT(){

    console.log("Iniciamos conexion con MQTT....");

    this.options = {
      username: this.usr, //'gnkebpyu', // "pi",
      password: this.pss  //'VVXMeNUbeKnn'  //"raspberry"
    };
    // url = 'ws://192.168.0.20:1884'
    // wss://m21.cloudmqtt.com:35995
    // url = 'wss://' + url;
    console.log("Estoy accediendo a : "+this.url);
/*
    this.client = mqtt.connect(this.url, this.options);

    this.client.on('connect', function() {
      console.log('Client started...');
      this.client.subscribe(this.diot.topic + '/+',0);
    });


  this.client.on('message', function(topic, message) {
          this.payload = message.toString();
          var env = this.diot.topic;
          if(topic== env + "/luz"){
              this.sensores.luz  = (this.payload === "on" ? true: false);
          } else if(topic== env + "/air"){
              this.sensores.air  = this.payload;
          } else if(topic== env + "/temp"){
               this.sensores.temp  = this.payload;
          } else if(topic== env + "/pres"){
              this.sensores.pres  = this.payload;
              this.presencia     = this.sensores.pres === "true" ? "person" : "";
          }
    });  

*/    
  }

}
