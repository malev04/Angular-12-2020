import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  dogs = [
    { name: "Muri", age: 10, owner: "Jüri" },
    { name: "Muki", age: 5, owner: "Kalle" },
    { name: "Auh", age: 2, owner: "Pille" },
    { name: "Pontu", age: 4, owner: "Sille" },
    { name: "Lontu", age: 12, owner: "Malle" },
    { name: "Tuutu", age: 8, owner: "Mati" },
     ]
     
  constructor() { }
}
