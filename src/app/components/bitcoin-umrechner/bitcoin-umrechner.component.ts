import { Component, OnInit } from '@angular/core';
import { ConversionService } from '../../services/conversion.service';

@Component({
  selector: 'app-bitcoin-umrechner',
  templateUrl: './bitcoin-umrechner.component.html',
  styleUrls: ['./bitcoin-umrechner.component.scss']
})
export class BitcoinUmrechnerComponent implements OnInit {

  constructor(private convert: ConversionService) { }

  amountInBtc;
  amountToConvert;
  currencies = ["USD", "GBP", "AUD", "NZD", "EUR"];
  selectedCurrency;



  ngOnInit(): void {
  }

  convertAmount(selectedCurrency, amountToConvert,) {
    console.log("amount entered : ", amountToConvert, selectedCurrency)
    this.convert.convert(selectedCurrency, amountToConvert).subscribe(data => this.amountInBtc = data)
  }


}
