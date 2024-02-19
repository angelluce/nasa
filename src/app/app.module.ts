import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {DialogModule} from "primeng/dialog";
import {InfoComponent} from './shared/info/info.component';
import {TooltipModule} from "primeng/tooltip";
import {ImageModule} from "primeng/image";
import {ApodComponent} from './components/nasa/apod/apod.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { SearchComponent } from './shared/search/search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import { EpicComponent } from './components/nasa/epic/epic.component';
import {SafePipe} from "./shared/safe.pipe";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        InfoComponent,
        ApodComponent,
        LoadingComponent,
        SearchComponent,
        EpicComponent,
        SafePipe
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    TooltipModule,
    ImageModule,
    CalendarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
