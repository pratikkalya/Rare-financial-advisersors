import { Component , OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SearchrestProvider } from '../../providers/searchrest/searchrest';
import 'rxjs/add/operator/map';
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage implements OnInit{
  users: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient, public searchrestProvider:SearchrestProvider) {
  }
  ionViewDidLoad() {
     console.log('ionViewDidLoad SearchPage');
  }
  ngOnInit() {
    this.searchrestProvider.getUsers()
    .then(data => {
    this.users = data;
    console.log(this.users);
    });
    }
}
