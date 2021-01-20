import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValitudService {
  chosenPeople = [];

  constructor() { }

  addHuman(human: {firstName: string, lastName: string, age: number, address: string}) {
    this.chosenPeople = JSON.parse(localStorage.getItem("people")) || [];
    this.chosenPeople.push(human);
    localStorage.setItem("people", JSON.stringify(this.chosenPeople));
  }

  deleteHuman(index: number) {
    this.chosenPeople = JSON.parse(localStorage.getItem("people")) || [];
    this.chosenPeople.splice(index, 1);
    localStorage.setItem("people", JSON.stringify(this.chosenPeople));
  }

  deleteAllPeople() {
    this.chosenPeople = JSON.parse(localStorage.getItem("people")) || [];
    this.chosenPeople = [];
    localStorage.setItem("people", JSON.stringify(this.chosenPeople));
  }
}
