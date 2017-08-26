import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';


/**
 * Generated class for the DefinirdestinoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-definirdestino',
  templateUrl: 'definirdestino.html',
})
export class DefinirdestinoPage {
  title: string = 'My first AGM project';
  lat: number = -3.0911;
  lng: number = -60.0690;

  constructor(private googleMaps: GoogleMaps, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefinirdestinoPage');
  }

}
