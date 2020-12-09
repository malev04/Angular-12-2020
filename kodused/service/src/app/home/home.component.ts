import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: { imgSrc: string; title: string; price: string; category: string; }[];

  constructor(private ItemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.ItemService.itemsFromService;
  }

}
