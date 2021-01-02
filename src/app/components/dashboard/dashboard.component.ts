import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private data: DataService) { }

   usdResult;

  ngOnInit(): void {
  console.log("hello from on init");
   this.data.getPrice().pipe(map((result) => (this.usdResult = result))).subscribe(resData => {console.log(resData)});


  }

}
