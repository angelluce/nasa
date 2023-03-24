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
import { InfoComponent } from './components/info/info.component';
import {TooltipModule} from "primeng/tooltip";
import {ImageModule} from "primeng/image";
import { ApodComponent } from './components/apod/apod.component';
import {CarouselModule} from "primeng/carousel";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    ApodComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ButtonModule,
        ToastModule,
        DialogModule,
        TooltipModule,
        ImageModule,
        CarouselModule
    ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
