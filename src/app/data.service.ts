import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

    getPrice(): Observable<any> {
        var url = "https://api.blockchain.com/v3/exchange/tickers/BTC-USD";
     return this.http.get(url);
  }


}
