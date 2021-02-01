import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbersComponent } from './numbers/numbers.component';
import { PeopleComponent } from './people/people.component';
import { MultiplyPipe } from './numbers/multiply.pipe';
import { ShortenPipe } from './people/shorten.pipe';
import { CountrycodePipe } from './countrycode.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    PeopleComponent,
    MultiplyPipe,
    ShortenPipe,
    CountrycodePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
