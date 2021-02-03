import { Item } from '../item.model';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { ItemService } from '../item.service';
import { UniquePipe } from './unique.pipe';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  //toodete massiiv (oluline: ilma s-ta!)
  productShown: Item[];
  //productShown: { imgSrc: string, title: string, price: string, category: string };
  productOriginal: Item[];
  productsCategories: {category: string, isSelected: boolean} [];
  titleNumber = 0;
  priceNumber = 0;
  dropdownOpen = false;
  isSorting = false;

  constructor(private itemService: ItemService, 
    private cartService: CartService,
    private uniquePipe: UniquePipe,
    private filterPipe: FilterPipe) { }

  ngOnInit(): void {
    //this.productShown = this.itemService.getProducts();
    this.itemService.fetchProductsFromDatabase().subscribe(response => {
        this.productShown = response.slice();
        this.productOriginal = response.slice();
        /* Firebase baasi tabelisse uue/uute veergude lisamine 
        lisame Firebase baasi tabelisse uue veeru isFavorite
        this.productOriginal = response.map(item=>({...item, isFavorite: false}));
        */ 
        this.productOriginal = response.map(item=>({...item, popularity: Math.floor(Math.random() * 10)}));
        this.productsCategories = this.uniquePipe.transform(this.productShown).map(product => {
          return {category: product.category, isSelected: true}
        });
        //console.log("andmebaasist võetud....");
      });    
      //console.log("see peaks tulema pärast andmebaasi ...");
  }

  onChangeCategory(i: number) {
    /* jätkab järgmine kord: 01.02.2021 ... 
    annab võimaluse kategooria järgi tooteid filtreerida ...*/
    this.productsCategories[i].isSelected = !this.productsCategories[i].isSelected;
    this.productShown = this.filterPipe.transform(this.productOriginal, this.productsCategories); 
}


  onSortTitle() {
     this.titleNumber = this.titleNumber + 1;
    if (this.titleNumber ==1) {
      this.productShown = this.productShown.sort((thisItem, nextItem) =>
      thisItem.title.localeCompare(nextItem.title));
    } else if (this.titleNumber == 2) {
      this.productShown = this.productShown.sort((thisItem, nextItem) =>
      nextItem.title.localeCompare(thisItem.title));
    } else if (this.titleNumber == 3) {
      // vana: this.productShown = this.productOriginal;
      this.productShown = this.productOriginal.slice();
      this.titleNumber = 0;
    }     
  }
  
  onSortPopularity() {
  }

  onSortPrice() {
    this.titleNumber = this.titleNumber + 1;
    if (this.titleNumber == 1) {
      // originaal, mis oli enne sortPrice sees
      this.productShown = this.productShown.sort((thisItem, nextItem) =>
      (Number)(thisItem.price) - (Number)(nextItem.price));
    } else if (this.titleNumber == 2) {
      // vahetasin ära nextItem ja thisItem, muidu oli sortPrice sees
      this.productShown = this.productShown.sort((thisItem, nextItem) =>
      (Number)(nextItem.price) - (Number)(thisItem.price));
      //vana: nextItem.title.localeCompare(nextItem.title));
    } else if (this.titleNumber == 3) {
      // sama mis oli title sees 
      this.productShown = this.productOriginal.slice();
      this.titleNumber = 0;
    }
    this.isSorting = false;
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

  onFavorite(item: { isFavorite: boolean; }) {
    item.isFavorite = !item.isFavorite;
  }

  onAddToDatabase() {
    // this.itemService.saveProductsToDatabase();
    this.itemService.saveProductsToDatabase(this.productOriginal);
  }
}