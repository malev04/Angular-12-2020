import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValitudComponent } from './valitud/valitud.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "chosen", component: ValitudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
