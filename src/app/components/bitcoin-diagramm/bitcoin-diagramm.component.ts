import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-bitcoin-diagramm',
  templateUrl: './bitcoin-diagramm.component.html',
  styleUrls: ['./bitcoin-diagramm.component.scss']
})
export class BitcoinDiagrammComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var ctx = document.getElementById('myChart');
    
  }

}
