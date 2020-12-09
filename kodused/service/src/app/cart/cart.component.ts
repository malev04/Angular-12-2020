import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: { imgSrc: string; title: string; price: string; category: string; }[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.itemsFromService;
  }

}
