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
    {firstName: "Gustav", lastName: "Sookaera", age: 22, address: "Estonia" },
    {firstName: "Friedrich", lastName: "Faust", age: 64, address: "Estonia" },
    {firstName: "Joonas", lastName: "Jutt", age: 26, address: "Estonia" },
    {firstName: "Jaak", lastName: "Joamets", age: 38, address: "Estonia" },
    {firstName: "Günther", lastName: "Grass", age: 41, address: "Germany" },
    {firstName: "Tiiu", lastName: "Poisipea", age: 22, address: "Estonia" },
    {firstName: "Henn", lastName: "Vesihein", age: 22, address: "Estonia" },
    {firstName: "Liisa", lastName: "Ronimois", age: 36, address: "Estonia" },
    {firstName: "Walter", lastName: "Richter", age: 36, address: "Germany" },
  ]

  constructor() { }
  
  removeAll() {
    this.people = [];
  }

  removeOne(index: number): void {
    this.people.splice(index,1);
  }

  addOne(human: any): void {
    this.people.push(human);
    console.log(this.people);
  }

  getOne(index: number): any {
    return this.people[index];
  }

  getAll(): any[] {
    console.log(this.people);
    console.log(this.people.slice());
    return this.people.slice();
  }

}
