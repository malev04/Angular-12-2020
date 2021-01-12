import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RabbitService {
  //multi-dimensiooniline massiiv
  rabbits = [
    { breed: {name: "One", origin: "England"}, children: ["Gustav", "Adolf"] },
    { breed: {name: "Two", origin: "Germany"}, children: ["Miina", "Härma"] },
    { breed: {name: "Three", origin: "Sweden"}, children: ["Tallinn", "Tartu", "Pärnu"] },
    { breed: {name: "Four", origin: "Finland"}, children: ["Juku"] },
    { breed: {name: "Five", origin: "France"}, children: ["Laps"] },
    { breed: {name: "Six", origin: "Norway"}, children: ["Frida"] },
    ]

  constructor() { }
}
