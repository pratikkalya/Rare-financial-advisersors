import { Component , ViewChild} from '@angular/core';
import { NavController, NavParams ,Slides} from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { LoginPage } from '../login/login';
import { SearchPage } from '../search/search';
import { RestProvider } from '../../providers/rest/rest';
import { UserloginPage } from '../userlogin/userlogin';
import { KycPage } from '../kyc/kyc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage{
  users: any;
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController,  public restProvider: RestProvider,public navParams: NavParams){}
  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  loadRegistrationPage(){
    this.navCtrl.push(RegistrationPage);
  }
  loadLoginPage(){
    this.navCtrl.push(LoginPage);
  }
  signupPage(){
    this.navCtrl.push(RegistrationPage);
  }
  loginPage(){
    this.navCtrl.push(LoginPage);
  }
  // searchPage(){
  //   this.navCtrl.push(UserloginPage);
  // }
  kyc(){
    this.navCtrl.push(KycPage);
  }
}
