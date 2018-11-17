import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
@Component({
  selector: 'page-funds',
  templateUrl: 'funds.html',
})
export class FundsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FundsPage');
  }

}
