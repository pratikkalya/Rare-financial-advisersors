import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // onLogin(){
  //   console.log(this.uname.value, this.password.value);
  //   if(this.uname.value == "admin" && this.password.value == "admin"){
  //     let alert = this.alertCtrl.create({
  //       title: 'Login Sucessfull !',
  //       subTitle: 'You Are Logged In',
  //       buttons: ['Dismiss']
  //     });
  //     alert.present();
  //   }
  // }
}
