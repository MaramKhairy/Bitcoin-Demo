import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Price } from 'src/app/models/price.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getPrice() {
    const currencies = "EUR, USD, AUD";
    var url = "https://blockchain.info/ticker";
    //var url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=EUR" 
    return this.http.get(url);
  }

  getBitcoinDetails() {
    var url = "https://api.blockchain.info/stats";
    return this.http.get(url);
  }

}
