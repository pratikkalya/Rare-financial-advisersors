import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class RestProvider {

  //apiUrl = 'http://192.168.100.3:8000/api/register';

  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');
  }
  
  // addUser(data) {
  //   return new Promise((resolve, reject) => {
  //     this.http.post(this.apiUrl, JSON.stringify(data))
  //       .subscribe(res => {
  //         resolve(res);
  //       }, (err) => {
  //         reject(err);
  //       });
  //   });
  // }
  // getUsers() {
  //   return new Promise(resolve => {
  //     this.http.get(this.apiUrl).subscribe(data => {
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });
  // }
}
