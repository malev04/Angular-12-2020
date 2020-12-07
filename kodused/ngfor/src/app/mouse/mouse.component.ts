import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {
  mice = [
  { name: "Miki", age: 16, home: "Disneyland", image: "../assets/mickey-64x64.ico", children: 4, owner: "Tiiu" },
  { name: "Hiir", age: 5, owner: "Kalle" },
  { name: "Minni", age: 7, owner: "Malle" },
  { name: "Koduhiir", age: 2, owner: "Sille", children: 1, },
  { name: "Õuehiir", age: 14, owner: "Pille" },  
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
