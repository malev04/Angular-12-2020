import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people = [
    {name: "Mihkel", age: 1998, countrycode: 'EE'},
    {name: "Piret", age: 1972, countrycode: 'SE'},
    {name: "Victor", age: 1974, countrycode: 'RU'},
    {name: "Robert", age: 1969, countrycode: 'GB'},
    {name: "Sarah", age: 1986, countrycode: 'DE'},
    {name: "Pekka", age: 1978, countrycode: 'FI'},
    {name: "Benny", age: 1991, countrycode: 'GB'},
    {name: "Kurt", age: 1986, countrycode: 'DE'},
    {name: "Steve", age: 1982, countrycode: 'LV'},
    {name: "Sarunas", age: 1978, countrycode: 'LT'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
