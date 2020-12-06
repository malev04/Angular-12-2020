import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poed',
  templateUrl: './poed.component.html',
  styleUrls: ['./poed.component.css']
})
export class PoedComponent implements OnInit {
  shops = [
  { location: "Narva mnt 7B", time: "9-17", hinnaklass: "normaalne"},
  { location: "Toompuiestee 8C", time: "9-17", hinnaklass: "keskmine"},
  { location: "Liivalaia 16D", time: "9-17", hinnaklass: "kõrge"}	
];
  shop: { location: string; time: string; hinnaklass: string};	

  constructor() { }

  ngOnInit(): void {
	this.shop = this.getFirstShop();
  }

  getFirstShop(): {location: string, time: string, hinnaklass: string} {
	return this.shops[0];  
  }	
}
