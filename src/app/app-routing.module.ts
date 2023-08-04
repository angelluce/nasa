import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ApodComponent} from "./components/nasa/apod/apod.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'apod', component: ApodComponent },
  { path: '', redirectTo: 'apod', pathMatch: 'full'},
  { path: '**', redirectTo: 'apod', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
