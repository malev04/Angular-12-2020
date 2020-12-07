import { KoduComponent } from './kodu/kodu.component';
import { LehtComponent } from './leht/leht.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: KoduComponent },
  { path: "leht", component: LehtComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
