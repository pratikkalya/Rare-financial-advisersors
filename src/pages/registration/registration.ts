import { Component , OnInit} from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Http ,Headers, RequestOptions} from '@angular/http';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage implements OnInit{
  // result:any = [];
  // data : Observable<any>;
   formVar:FormGroup;
   name:AbstractControl;
   email:AbstractControl;
   password:AbstractControl;
   c_password:AbstractControl;
   phone_no : AbstractControl;
   bank_name: AbstractControl;
   account_no :AbstractControl;
   pan_no:AbstractControl;
   address:AbstractControl;
  //  user = { name: '', email: '', password: '', cpassword:''};
  // restapiService: any;
  data :any = {};
   
    constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public restProvider: RestProvider, public fb : FormBuilder, public toastController:ToastController) {
      this.http = http;
    }
    ngOnInit(){
    this.formVar = this.fb.group({
      name:['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      c_password: ['', Validators.required],
      phone_no:['', Validators.required],
      bank_name:['', Validators.required],
      account_no:['', Validators.required],
      pan_no:['', Validators.required],
      address:['', Validators.required]
    });
    this.name = this.formVar.controls['name'];
    this.email = this.formVar.controls['email'];
    this.password = this.formVar.controls['password'];
    this.c_password = this.formVar.controls['c_password'];
    this.phone_no = this.formVar.controls['phone_no'];
    this.bank_name = this.formVar.controls['bank_name'];
    this.account_no = this.formVar.controls['account_no'];
    this.pan_no = this.formVar.controls['pan_no'];
    this.address = this.formVar.controls['address'];

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }
  saveUser(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    let options = new RequestOptions({ headers:headers});
    var api = "http://192.168.100.3:8000/api/register";
    var myData = JSON.stringify({name: this.data.name, email:this.data.email, password:this.data.password, c_password:this.data.c_password, phone_no: this.data.phone_no,bank_name: this.data.bank_name,account_no: this.data.account_no,pan_no: this.data.pan_no,address: this.data.address});
    
    return this.http.post(api, myData, options).subscribe(data => {
      let addToast = this.toastController.create({
        message:"Registration Sucessfull !!",
        duration:3000
      });
      addToast.present();
      console.log(data);
      this.navCtrl.push(LoginPage);
      console.log("You register sucessfully !!");
    },(_error) => {
      let addToast = this.toastController.create({
        message:"All fields are required! Password Must be at least 6 characters long.",
        duration:4000,
        cssClass:"error"
      });
      addToast.present();
      console.log("Registration Failed !!");
    });
    }
}