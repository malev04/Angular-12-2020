import { Item } from '../item.model';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  products: Item[];
  //products: { imgSrc: string, title: string, price: string, category: string };
  productOriginal: Item[];
  titleNumber = 0;
  dropdownOpen: boolean;

  constructor(private itemService: ItemService, 
    private cartService: CartService) { }

  ngOnInit(): void {
    //this.products = this.itemService.getProducts();
    this.itemService.fetchProductsFromDatabase().subscribe(response => {
        this.products = response;
        this.productOriginal = this.products;
        console.log("andmebaasist võetud....");
      });    
      console.log("see peaks tulema pärast andmebaasi ...");
  }

  onSortTitle() {
    this.titleNumber = this.titleNumber + 1;
    if (this.titleNumber ==1) {
      this.products = this.products.sort((thisItem, nextItem) =>
      thisItem.title.localeCompare(nextItem.title));
    } else if (this.titleNumber == 2) {
      this.products = this.products.sort((thisItem, nextItem) =>
      nextItem.title.localeCompare(nextItem.title));
    } else if (this.titleNumber == 3) {
      this.products = this.productOriginal;
      this.titleNumber = 0;
    }
  }
  

  onSortPopularity() {
  }

  onSortPrice() {
    this.titleNumber = this.titleNumber + 1;
    if (this.titleNumber ==1) {
      // orig mis oli enne sortPrice sees
      this.products = this.products.sort((thisItem, nextItem) =>
      thisItem.title.localeCompare(nextItem.title));
    } else if (this.titleNumber == 2) {
      // vahetasin ära nextItem ja thisItem, muidu oli sortPrice sees
      this.products = this.products.sort((thisItem, nextItem) =>
      nextItem.title.localeCompare(nextItem.title));
    } else if (this.titleNumber == 3) {
      // sama mis oli title sees 
      this.products = this.productOriginal.slice();
      this.titleNumber = 0;
    }
  }

  onSortDiscount() {
  }

  onOpenDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
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

  onAddToDatabase() {
    this.itemService.saveProductsToDatabase();
  }
}