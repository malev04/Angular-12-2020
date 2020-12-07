import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KoduComponent } from './kodu/kodu.component';
import { LehtComponent } from './leht/leht.component';

@NgModule({
  declarations: [
    AppComponent,
    KoduComponent,
    LehtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
