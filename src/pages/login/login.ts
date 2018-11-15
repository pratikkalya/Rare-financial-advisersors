import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { UserloginPage } from '../userlogin/userlogin';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage{
  responseData : any;
  myData :any = {};
  localStoragekey: any;
  showLoader: any;
 
  // @ViewChild('username') uname;
  // @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController,public restProvider : RestProvider,public toastController:ToastController) { }

  ionViewDidLoad(){
    console.log('ionViewDidLoad LoginPage');
  }
  onLogin(){
    this.restProvider.postData({email:this.myData.email, password: this.myData.password}, this.localStoragekey).then((result) =>{
      let addToast = this.toastController.create({
        message:"Login Sucessfull !!",
        duration:3000
        
      });
      addToast.present();
      console.log('Login Sucessfully !!!');
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('myData', JSON.stringify(this.responseData));
      this.navCtrl.push(UserloginPage);
    },(_err) =>{
      console.log('error');
      //Connection failed message
    });
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
