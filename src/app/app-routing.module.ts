import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ApodComponent} from "./components/nasa/apod/apod.component";
import {EpicComponent} from "./components/nasa/epic/epic.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apod', component: ApodComponent },
  { path: 'epic', component: EpicComponent },
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
