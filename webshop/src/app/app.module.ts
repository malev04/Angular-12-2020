import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './global/navbar/navbar.component';
import { FooterComponent } from './global/footer/footer.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemViewComponent } from './item/item-view/item-view.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './global/not-found/not-found.component';
import { UniquePipe } from './item/item-list/unique.pipe';
import { FilterPipe } from './item/item-list/filter.pipe';
import { SpinnerComponent } from './global/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ItemListComponent,
    ItemViewComponent,
    CartComponent,
    NotFoundComponent,
    UniquePipe,
    FilterPipe,
    SpinnerComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UniquePipe, FilterPipe, HttpClientModule],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
