import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AmigosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-amigos',
  templateUrl: 'amigos.html',
})
export class AmigosPage {

  amigos = [
    {
      "nome": "Amigo1",
      "imagem": "http://www.caixa.gov.br/PublishingImages/Paginas/LT_T026/banner_header_conta_corrente.jpg"
    },
    {
      "nome": "Amigo2",
      "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aJty4PObI0siJo4CPJaRmtYWRn9GI5y9gsK8OrbxH34Nuh5TCQ"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.amigos)
  }

}
