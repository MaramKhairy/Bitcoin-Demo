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

  

  //add catch error 
  this.data.getPrice()
 .pipe(tap(result => {console.log("result =",result)} )).subscribe(response => this.prices = JSON.stringify(response, getCircularReplacer()) );

 //for circular structure
  const getCircularReplacer = () => {
    const seen = new WeakSet;
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  
 this.bitcoinOwned= localStorage.getItem("btc Amount");
}
}
