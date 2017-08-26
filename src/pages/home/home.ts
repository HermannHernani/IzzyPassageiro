import { Component } from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';
import {SolicitacaoPage} from "../solicitacao/solicitacao";
import {AddamigosPage} from "../addamigos/addamigos";
import {PopovermenuPage} from "../popovermenu/popovermenu";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import {DefinirdestinoPage} from "../definirdestino/definirdestino";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'My first AGM project';
  lat: number = -3.0911;
  lng: number = -60.0690;

  constructor(private googleMaps: GoogleMaps, public popoverCtrl: PopoverController, public navCtrl: NavController) {


  }



  funcao1(){
    this.navCtrl.push(SolicitacaoPage);
  }

  funcao2(){
    this.navCtrl.push(AddamigosPage);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopovermenuPage);
    popover.present({
      ev: myEvent
    });
  }
  funcao3(){
    this.navCtrl.push(DefinirdestinoPage);
  }

}
