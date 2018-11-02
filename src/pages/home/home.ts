import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides} from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { LoginPage } from '../login/login';
import { RestProvider } from '../../providers/rest/rest';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  users: any;
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController,  public restProvider: RestProvider,public navParams: NavParams) {
    // this.getUsers();
  }
  // getUsers() {
  //   this.restProvider.getUsers()
  //   .then(data => {
  //     this.users = data;
  //     console.log(this.users);
  //   });
  //}
  slideChanged() {
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
}
