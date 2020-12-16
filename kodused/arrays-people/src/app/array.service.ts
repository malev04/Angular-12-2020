import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  people = [
    {firstName: "Anna", lastName: "Annik", age: 21, address: "Esonia" },
    {firstName: "Birgit", lastName: "Beez", age: 19, address: "Latvia" },
    {firstName: "Gerhard", lastName: "Berger", age: 24, address: "Austria" },
    {firstName: "Gustav", lastName: "Gross", age: 32, address: "Esonia" },
    {firstName: "Joonas", lastName: "Jutt", age: 26, address: "Esonia" },
  ]

  constructor() { }
  removeAll() {
    this.people = [];
  }

  removeOne(index) {
    this.people.splice(index,1);
  }

  addOne(human) {
    this.people.push(human);
  }

  getOne(index) {
    return this.people[index];
  }

  getAll() {
    return this.people.slice();
  }

}