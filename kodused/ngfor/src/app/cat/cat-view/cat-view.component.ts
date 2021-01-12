import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat-view',
  templateUrl: './cat-view.component.html',
  styleUrls: ['./cat-view.component.css']
})
export class CatViewComponent implements OnInit {
  id;
  cat;

  constructor(private route: ActivatedRoute,
    private catService: CatService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param.catId;
    })
    this.cat = this.catService.cats[this.id]
  }

}
