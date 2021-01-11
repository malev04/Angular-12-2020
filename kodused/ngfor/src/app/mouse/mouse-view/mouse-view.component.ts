import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MouseService } from '../mouse.service';

@Component({
  selector: 'app-mouse-view',
  templateUrl: './mouse-view.component.html',
  styleUrls: ['./mouse-view.component.css']
})

export class MouseViewComponent implements OnInit {
  id;
  mouse;

  constructor(private route: ActivatedRoute, 
      private mouseService: MouseService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param.mouseId;
    })
    this.mouse = this.mouseService.mice[this.id]
  }

}