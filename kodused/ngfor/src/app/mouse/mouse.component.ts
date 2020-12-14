import { MouseService } from './mouse.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {
  mice;

  constructor(private MouseService: MouseService) { }

  ngOnInit(): void {
    this.mice = this.MouseService.mice;
  }

}
