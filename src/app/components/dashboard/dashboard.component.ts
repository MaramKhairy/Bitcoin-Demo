import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { map, tap } from 'rxjs/operators';
//import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private data: DataService) { }


  prices;
  bitcoinOwned;

  ngOnInit(): void {



this.data.getPrice()
.subscribe(
  (result:any)=>{
    this.prices =new Map(Object.entries(result));
    console.log(this.prices), console.log("result", Object.entries(result));
 }
 );
  
 this.bitcoinOwned= localStorage.getItem("btc Amount");
}
}
