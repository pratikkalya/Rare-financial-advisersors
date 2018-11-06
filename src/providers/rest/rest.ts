import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()

export class RestProvider {
  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');
  }
  postData(myData,token) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', "Bearer " + token );  
      this.http.post("http://192.168.100.4:8000/api/login", JSON.stringify(myData), {headers: headers})
        .subscribe(res => {
         resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }
}
