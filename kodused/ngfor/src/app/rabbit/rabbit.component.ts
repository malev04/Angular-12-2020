import { RabbitService } from './rabbit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rabbit',
  templateUrl: './rabbit.component.html',
  styleUrls: ['./rabbit.component.css']
})
export class RabbitComponent implements OnInit {
    rabbits: any;

  constructor(private RabbitService: RabbitService) { }

  ngOnInit(): void {
    this.rabbits = this.RabbitService.rabbits;
  }

}
