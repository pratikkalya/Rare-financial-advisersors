import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class SearchrestProvider {
  apiUrl = 'http://192.168.100.4:8000/api/getFundHouseDetails';
  constructor(public http: HttpClient) {
    console.log('Hello SearchrestProvider Provider');
  }

  getUsers(){
    return new Promise(resolve => {
    this.http.get(this.apiUrl).subscribe(data => {
    resolve(data);},
    err => {
    console.log(err);
    });
    });
    }
}
