import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MouseService {
  mice = [
    { name: "Miki", age: 16, home: "Disneyland", image: "../assets/mickey-64x64.ico", children: 4, owner: "Tiiu" },
    { name: "Hiir", age: 5, owner: "Kalle" },
    { name: "Minni", age: 7, owner: "Malle" },
    { name: "Koduhiir", age: 2, owner: "Sille", children: 1, },
    { name: "Õuehiir", age: 14, owner: "Pille" },  
   ]

  constructor() { }
}
