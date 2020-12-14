import { CatService } from './cat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  cats;

  constructor(private CatService: CatService) { }

  ngOnInit(): void {
    this.cats = this.CatService.cats;
  }

}
