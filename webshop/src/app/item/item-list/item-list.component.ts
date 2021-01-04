import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  //products: number;
  products: { imgSrc: string; title: string; price: string; category: string; } [];
  //products: { imgSrc: string, title: string, price: string, category: string };
  
  constructor(private itemService: ItemService, 
    private cartService: CartService) { }

  ngOnInit(): void {
    //this.products = this.itemService.products;
    //this.products = this.itemService.getOneProduct(this.id);
    //this.itemService.products = [];
    this.products = this.itemService.getProducts();
    
  }

  onAddToCart(product: any) {
    this.cartService.productsInService.push(product);
    localStorage.setItem("items", 
        JSON.stringify(this.cartService.productsInService));
  }

  onMouseEnter(item: any) {
    item.showButton = true;
  }

  onMouseLeave(item: any) {
    item.showButton = false;
  }
}
