import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import { Toast } from '@ionic-native/toast';


/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AngularFireAuth, private db: AngularFireDatabase, private toast: Toast) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  onSignUp(form: NgForm){
    const nome = form.value.nome;
    const sobrenome = form.value.sobrenome;
    const username = form.value.username;
    const password = form.value.password;
    this.auth.auth.createUserWithEmailAndPassword(username, password).then(
      ()=>{
        const user$ = this.db.object('User/' + this.auth.auth.currentUser.uid);
        user$.set({
          nome: nome,
          sobrenome: sobrenome,
          imagem: 'assets/icon/unknown.jpeg'
        }).then(
          ()=>{
          },
          err => console.log(err)
        );
      },
      err => console.log(err)
    );
  }

}
