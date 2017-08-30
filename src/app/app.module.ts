import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SolicitacaoPage} from "../pages/solicitacao/solicitacao";
import {AddamigosPage} from "../pages/addamigos/addamigos";
import {PopovermenuPage} from "../pages/popovermenu/popovermenu";
import {ConfiguracoesPage} from "../pages/configuracoes/configuracoes";
import {AmigosPage} from "../pages/amigos/amigos";
import { AgmCoreModule } from '@agm/core';
import {TelainicialPage} from "../pages/telainicial/telainicial";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {DefinirdestinoPage} from "../pages/definirdestino/definirdestino";
import * as firebase from "firebase/app";
import {Facebook} from "@ionic-native/facebook";
import { ImagePicker } from '@ionic-native/image-picker';
import {SobrePage} from "../pages/sobre/sobre";
import { Geolocation } from '@ionic-native/geolocation';



var config = {
  apiKey: "AIzaSyDiAABmy_9yOqDurJKf0wMrWOJTy4mV7Fc",
  authDomain: "izzyapp-b7340.firebaseapp.com",
  databaseURL: "https://izzyapp-b7340.firebaseio.com",
  projectId: "izzyapp-b7340",
  storageBucket: "izzyapp-b7340.appspot.com",
  messagingSenderId: "725536231405"
};

firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SolicitacaoPage,
    AddamigosPage,
    PopovermenuPage,
    ConfiguracoesPage,
    AmigosPage,
    TelainicialPage,
    LoginPage,
    RegisterPage,
    DefinirdestinoPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDn2rm7aWxmPOiVfchGWBcZjffHzF4Bis'
    }),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SolicitacaoPage,
    AddamigosPage,
    PopovermenuPage,
    ConfiguracoesPage,
    AmigosPage,
    TelainicialPage,
    LoginPage,
    RegisterPage,
    DefinirdestinoPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    ImagePicker,
      Geolocation
  ]
})
export class AppModule {}
