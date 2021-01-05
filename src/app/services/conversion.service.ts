import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor(private http: HttpClient) { }

  convert(currency, value) {
    currency = currency;
    value = value;
    var url = `https://blockchain.info/tobtc?currency=${currency}&value=${value}`;
    return this.http.get(url);
  }

}
