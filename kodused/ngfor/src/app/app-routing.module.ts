import { RabbitComponent } from './rabbit/rabbit.component';
import { MouseComponent } from './mouse/mouse.component';
import { DogComponent } from './dog/dog.component';
import { DogViewComponent } from './dog/dog-view/dog-view.component';
import { CatComponent } from './cat/cat.component';
import { CatViewComponent } from './cat/cat-view/cat-view.component';
import { MouseViewComponent } from './mouse/mouse-view/mouse-view.component';
import { RabbitViewComponent } from './rabbit/rabbit-view/rabbit-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "cat", pathMatch: "full" },
  { path: "cat", component: CatComponent },
  { path: "dog", component: DogComponent },	
  { path: "mouse", component: MouseComponent },
  { path: "rabbit", component: RabbitComponent },
  { path: "cat/view/:catId", component: CatViewComponent },
  { path: "dog/view/:koeraNimi/:koeraVanus/:koeraOmanik", component: DogViewComponent },
  { path: "mouse/vaata/:id", component: MouseViewComponent },
  { path: "rabbit/view/:rabbitId", component: RabbitViewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
