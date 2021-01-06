import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meine-bitcoin',
  templateUrl: './meine-bitcoin.component.html',
  styleUrls: ['./meine-bitcoin.component.scss']
})
export class MeineBitcoinComponent implements OnInit {

  constructor() { }


  btcAmount
  ngOnInit(): void {

  }

  saveBtcAmount(btcAmount) {
    console.log(btcAmount);
    localStorage.setItem("btc Amount", btcAmount)
  }
}
