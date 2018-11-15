import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage{
  users: any[];
  apiUrl = 'http://192.168.100.6:8000/api/FundHouseall';
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) { 
    let apiData = this.http.get(this.apiUrl).map(res=>res.json().data);
    apiData.subscribe(data => {
      this.users=data;
      console.log(this.users);},
      err => {
      console.log(err);
      });
  }
  ionViewDidLoad() {
     console.log('ionViewDidLoad SearchPage');
  }
  // ngOnInit() {
  //   this.searchrestProvider.getUsers()
  //   .then(data => {
  //   this.users = data;
  //   console.log(this.users);
  //   });
  //   }
    toggleSection(i){
      this.users[i].open = !this.users[i].open;
      console.log(i);
    }
    toggleItem(i, j){
      this.users[i].categories[j].open= !this.users[i].categories[j].open;
      console.log(i, j);
    }
  }
  