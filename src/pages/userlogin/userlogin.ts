import { Component } from '@angular/core';
import { NavController, NavParams , ToastController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { CallNumber } from '@ionic-native/call-number';
import { SipPage } from '../sip/sip';
import { FundsPage } from '../funds/funds';
import { TransactPage } from '../transact/transact';
import { SipCalculatorPage } from '../sip-calculator/sip-calculator';
import { PlanningPage } from '../planning/planning';

@Component({
  selector: 'page-userlogin',
  templateUrl: 'userlogin.html',
})
export class UserloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,private callNumber: CallNumber , public toastController : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserloginPage');
  }
  
  signOut(){
    let alert = this.alertCtrl.create({
      title: 'Do you want to Logout?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Stay on this page');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Go to Login Page');
            this.navCtrl.push(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }

  dashboard(){
    this.navCtrl.push(SearchPage);
  }

  sip(){
    this.navCtrl.push(SipPage)
  }
  
  funds(){
    this.navCtrl.push(FundsPage)
  }

  transact(){
    this.navCtrl.push(TransactPage)
  }

  sipCalculator(){
    this.navCtrl.push(SipCalculatorPage)
  }

  planning(){
    this.navCtrl.push(PlanningPage)
  }

  call(){
    this.callNumber.callNumber("7029458072", true)
    .then(res => console.log('Launched dialer!', res))
    .catch((err) => {
      let addToast = this.toastController.create({
        message:"Something Went wrong !!",
        duration:2000,
        cssClass:"error"
      });
      addToast.present();
      console.log('Error launching dialer', err)
    });
  }
}
