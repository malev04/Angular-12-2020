import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rabbit',
  templateUrl: './rabbit.component.html',
  styleUrls: ['./rabbit.component.css']
})
export class RabbitComponent implements OnInit {
  rabbits = [
  { breed: {name: "One", origin: "England"}, children: ["Gustav", "Adolf"] },
  { breed: {name: "Two", origin: "Germany"}, children: ["Miina", "Härma"] },
  { breed: {name: "Three", origin: "Sweden"}, children: ["Tallinn", "Tartu", "Pärnu"] },
  { breed: {name: "Four", origin: "Finland"}, children: ["Juku"] },
  { breed: {name: "Five", origin: "France"}, children: ["Laps"] },
  { breed: {name: "Six", origin: "Norway"}, children: [] },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
