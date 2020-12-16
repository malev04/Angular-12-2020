import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  products: any;
  product: any;

  constructor(private itemService:ItemService ) { }

  ngOnInit(): void {
    this.products = this.itemService.products;
    this.product = this.products[10];
  }

}
