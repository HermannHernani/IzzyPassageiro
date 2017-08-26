import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

/**
 * Generated class for the TelainicialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-telainicial',
  templateUrl: 'telainicial.html',
})
export class TelainicialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelainicialPage');
  }
  openLogin(){
    this.navCtrl.push(LoginPage);
  }
  openRegister(){
    this.navCtrl.push(RegisterPage);
  }
  loginFacebook(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      .catch(e => console.log('Error logging into Facebook', e));
  }

}
