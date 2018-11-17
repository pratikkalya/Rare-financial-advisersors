import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,ToastController, LoadingController, MenuController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { UserloginPage } from '../userlogin/userlogin';
import { HomePage} from '../home/home'
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage{
  responseData : any;
  data :any = {};
  localStoragekey: any;
  showLoader: any;
  
  // @ViewChild('username') uname;
  // @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController,public restProvider : RestProvider,public toastController:ToastController,public loadingCtrl: LoadingController,public menuCtrl: MenuController) {}
  ionViewDidLoad(){
    console.log('ionViewDidLoad LoginPage');
  }
  onLogin(){
    this.restProvider.postData({email:this.data.email, password: this.data.password}, this.localStoragekey).then((result) =>{
      const loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 3000,
        dismissOnPageChange: true
      });
      loader.present();
      
    //   let addToast;
    //   addToast.onDismis(()=>{
    //    addToast = this.toastController.create({
    //     message:"Login Sucessfull !!",
    //     duration:2000,
    //     cssClass:"sucess"
    //   });
    //  })
    //   addToast.present();
      console.log('Login Sucessfully !!!');
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('data', JSON.stringify(this.responseData));
      this.navCtrl.setRoot(UserloginPage);
    },(_err) =>{
      let addToast = this.toastController.create({
        message:"Invalid Email or Password !!",
        duration:3000,
        cssClass:"error"
      });
      addToast.present();
      console.log('Login Failed !!!');
      //Connection failed message
    });
  }

  skip(){
    this.navCtrl.setRoot(UserloginPage)
  }
}
