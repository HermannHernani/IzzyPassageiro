import { Component, ViewChild, ElementRef } from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';
import {SolicitacaoPage} from "../solicitacao/solicitacao";
import {AddamigosPage} from "../addamigos/addamigos";
import {PopovermenuPage} from "../popovermenu/popovermenu";
import {DefinirdestinoPage} from "../definirdestino/definirdestino";
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild('map') mapElement: ElementRef;
    map: any;

  constructor(public geolocation: Geolocation, public popoverCtrl: PopoverController, public navCtrl: NavController) {


  }
    ionViewDidLoad(){
        this.loadMap();
    }

    loadMap() {

        this.geolocation.getCurrentPosition().then((position) => {

            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            let mapOptions = {
                center: latLng,
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        }, (err) => {
            console.log(err);
        });
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
