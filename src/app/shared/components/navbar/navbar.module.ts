import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { MenuModule } from '../menu/menu.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoadingModule } from '../loading/loading.module';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MenuModule,
    AppRoutingModule,
    LoadingModule
  ],
  providers: [],
  exports: [
    NavbarComponent,
  ],
})
export class NavbarModule { }