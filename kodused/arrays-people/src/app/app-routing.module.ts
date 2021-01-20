import { PersonNewComponent } from './person-new/person-new.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValitudComponent } from './valitud/valitud.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "chosen", component: ValitudComponent},
  { path: "new", component: PersonNewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
