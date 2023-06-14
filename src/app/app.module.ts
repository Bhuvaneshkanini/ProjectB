import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

import { HttpClientModule } from '@angular/common/http';
import { CardcomponentComponent } from './cardcomponent/cardcomponent.component';
import { CorouselcomponentComponent } from './corouselcomponent/corouselcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddproductComponent,
    HomeComponent,
    ViewproductComponent,
    CardcomponentComponent,
    CorouselcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
