import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { NavbarModule } from './shared/components/navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { MenuModule } from './shared/components/menu/menu.module';
import { AlertModule } from './shared/components/alert/alert.module';
import { PageLocationModule } from './shared/components/page-location/page-location.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    HttpClientModule,

    NavbarModule,
    HomeModule,
    MenuModule,
    AlertModule,
    PageLocationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
