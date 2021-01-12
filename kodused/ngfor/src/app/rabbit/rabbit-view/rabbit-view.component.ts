import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RabbitService } from '../rabbit.service';

@Component({
  selector: 'app-rabbit-view',
  templateUrl: './rabbit-view.component.html',
  styleUrls: ['./rabbit-view.component.css']
})
export class RabbitViewComponent implements OnInit {
   id;
   rabbit;

  constructor(private route: ActivatedRoute,
    private RabbitViewComponent: RabbitService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param.rabbitId;
    })
    this.rabbit = this.RabbitViewComponent.rabbits[this.id]
    
  }

}
