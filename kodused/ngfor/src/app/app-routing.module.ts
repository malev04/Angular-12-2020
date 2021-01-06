import { RabbitComponent } from './rabbit/rabbit.component';
import { MouseComponent } from './mouse/mouse.component';
import { DogComponent } from './dog/dog.component';
import { DogViewComponent } from './cat/cat-view/cat-view.component';
import { CatComponent } from './cat/cat.component';
import { CatViewComponent } from './cat/cat-view/cat-view.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "cat", pathMatch: "full" },
  { path: "cat", component: CatComponent },
  { path: "dog", component: DogComponent },	
  { path: "mouse", component: MouseComponent },
  { path: "rabbit", component: RabbitComponent },
  { path: "cat/view/:catId", component: CatViewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
