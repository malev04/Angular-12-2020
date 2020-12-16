import { ArrayService } from './../array.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  humans;
  constructor(private arrayService: ArrayService) { }

  ngOnInit(): void {
    this.humans = this.arrayService.people;
  }

}
