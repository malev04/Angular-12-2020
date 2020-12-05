import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeskond',
  templateUrl: './meeskond.component.html',
  styleUrls: ['./meeskond.component.css']
})
export class MeeskondComponent implements OnInit {

  members12  = ["Tõnu", "Kaarel", "Juku", "Mait", "Aksel"];

  constructor() { }

  ngOnInit(): void {
  }

}
