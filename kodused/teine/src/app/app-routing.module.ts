import { UudisedComponent } from './uudised/uudised.component';
import { MeistComponent } from './meist/meist.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KoduComponent } from './kodu/kodu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: KoduComponent },
  { path: "meist", component: MeistComponent },
  { path: "kontakt", component: KontaktComponent },
  { path: "uudised", component: UudisedComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
