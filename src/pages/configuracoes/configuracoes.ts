import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TelainicialPage} from "../telainicial/telainicial";
import { ImagePicker } from '@ionic-native/image-picker';
import {SobrePage} from "../sobre/sobre";

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {
  private options;

  constructor(public navCtrl: NavController, public navParams: NavParams, private imagePicker: ImagePicker) {
    this.imagePicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }
  sair(){
    this.navCtrl.setRoot(TelainicialPage);
  }
  openSobre(){
    this.navCtrl.push(SobrePage);
  }
}
