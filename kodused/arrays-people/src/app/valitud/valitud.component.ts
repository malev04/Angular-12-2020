import { Component, OnInit } from '@angular/core';
import { ValitudService } from './valitud.service';

@Component({
  selector: 'app-valitud',
  templateUrl: './valitud.component.html',
  styleUrls: ['./valitud.component.css']
})
export class ValitudComponent implements OnInit {
  chosen;

  constructor(private valitudService: ValitudService) { }

  ngOnInit(): void {
    this.chosen = 
      JSON.parse(localStorage.getItem("people")) || [];
  }

}
