import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  people = [
    {firstName: "Anna", lastName: "Annik", age: 21, address: "Estonia" },
    {firstName: "Birgit", lastName: "Beez", age: 19, address: "Latvia" },
    {firstName: "Gerhard", lastName: "Berger", age: 24, address: "Austria" },
    {firstName: "Gustav", lastName: "Gross", age: 32, address: "Estonia" },
    {firstName: "Joonas", lastName: "Jutt", age: 26, address: "Estonia" },
    {firstName: "Jaak", lastName: "Joamets", age: 38, address: "Estonia" },
  ]

  constructor() { }
  
  removeAll() {
    this.people = [];
  }

  removeOne(index: number) {
    this.people.splice(index,1);
  }

  addOne(human: { firstName: string; lastName: string; age: number; address: string; }) {
    this.people.push(human);
  }

  getOne(index: string | number) {
    return this.people[index];
  }

  getAll() {
    return this.people.slice();
  }

}
