import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { MouseComponent } from './mouse/mouse.component';
import { RabbitComponent } from './rabbit/rabbit.component';
import { CatViewComponent } from './cat/cat-view/cat-view.component';
import { DogViewComponent } from './dog/dog-view/dog-view.component';
import { MouseViewComponent } from './mouse/mouse-view/mouse-view.component';
import { RabbitViewComponent } from './rabbit/rabbit-view/rabbit-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DogComponent,
    MouseComponent,
    RabbitComponent,
    CatViewComponent,
    DogViewComponent,
    MouseViewComponent,
    RabbitViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
