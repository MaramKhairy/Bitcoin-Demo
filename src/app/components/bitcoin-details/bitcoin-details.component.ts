import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-bitcoin-details',
  templateUrl: './bitcoin-details.component.html',
  styleUrls: ['./bitcoin-details.component.scss']
})
export class BitcoinDetailsComponent implements OnInit {

  constructor(private data: DataService) { }

  
  bitcoinDetails
  ngOnInit(): void {

    this.data.getBitcoinDetails().subscribe(data => this.bitcoinDetails = data);
  }


}
