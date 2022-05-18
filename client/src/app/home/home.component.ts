import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, Observable, take } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../service/account.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
info = false;


  constructor() {}

  ngOnInit(): void {}
  // sendGetRequest() {
  //     let headerss = new Headers();
  //     headerss.append('Content-Type', 'application/json');
  //     headerss.append('Accept', 'application/json');
  //     // headerss.append('Access-Control-Allow-Origin', '*');
  //     headerss.append('Access-Control-Allow-Headers', 'Content-Type');

  //   return this.httpClient.get('https://steamcommunity.com/market/search/render/?search_descriptions=0&sort_column=default&sort_dir=desc&appid=730&norender=1&count=10', headerss as any)
  //     .subscribe(data=>{
  //     console.log(data)
  //     });
  // }

  // fetchJsonData(){
  //   fetch('https://steamcommunity.com/market/search/render/?search_descriptions=0&sort_column=default&sort_dir=desc&appid=730&norender=1&count=10',{mode: 'no-cors'})
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //   });
  // }

  // getData(): Observable<any> {
  //   return from(
  //     fetch(
  //       'https://steamcommunity.com/market/search/render/?search_descriptions=0&sort_column=default&sort_dir=desc&appid=730&norender=1&count=10', // the url you are trying to access
  //       {
  //         headers: {

  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json',
  //           "Access-Control-Allow-Origin" : "*",
  //           "Access-Control-Allow-Credentials" : 'true',
  //           Authorization: 'Bearer ' + this.user.token
  //         },
  //         method: 'GET', // GET, POST, PUT, DELETE
  //         mode: 'no-cors', // the most important option
  //       }
  //     ).then(response => response.json()).then(data => {console.log(data)}));
  // }



    //   data => {

    //     console.log(JSON.stringify(data, undefined));
    //   },
    //   error => {
    //     console.log(JSON.stringify(error, undefined));
    //   }
    // );
    // fetch('https://steamcommunity.com/market/search/render/?search_descriptions=0&sort_column=default&sort_dir=desc&appid=730&norender=1&count=500', {

    //   headers: {
    //     'Access-Control-Allow-Origin':'*',
    //     'Content-Type': 'application/json'
    //   }, method: 'GET'
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
      // let price = data.bpi.USD.rate;
      // let priceElement = document.getElementById('market-price');
      // priceElement.innerHTML = price;
  // })


  //  performSignIn() {

  //   let headers = new Headers();

  //   // headers.append('Content-Type', 'application/json');
  //   // headers.append('Accept', 'application/json');

  //   headers.append('Access-Control-Allow-Origin', '*');
  //   // headers.append('Access-Control-Allow-Credentials', 'true');

  //   // headers.append('GET', 'OPTIONS');
  //   // headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiO…GXyeoQAfudTj8VLxiZkcf83jDqLuOfE0yh5okqkNgHv3-Nsfg');


  //   fetch('https://steamcommunity.com/market/search/render/?search_descriptions=0&sort_column=default&sort_dir=desc&appid=730&norender=1&count=10', {
  //       mode: 'no-cors',
  //       // credentials: 'include',
  //       method: 'GET',
  //       headers: headers
  //     })
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  //     .catch(error => console.log('Authorization failed : ' + error.message));
  // }

}
