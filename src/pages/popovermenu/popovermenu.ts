import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {ConfiguracoesPage} from "../configuracoes/configuracoes";
import {AmigosPage} from "../amigos/amigos";

/**
 * Generated class for the PopovermenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-popovermenu',
  templateUrl: 'popovermenu.html',
})
export class PopovermenuPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  openConfig(){
    this.navCtrl.push(ConfiguracoesPage);
    this.viewCtrl.dismiss();
  }
  openFriends(){
    this.navCtrl.push(AmigosPage);
    this.viewCtrl.dismiss();
  }

}
