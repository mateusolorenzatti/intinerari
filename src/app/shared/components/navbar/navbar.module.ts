import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MenuModule
  ],
  providers: [],
  exports: [
    NavbarComponent,
  ],
})
export class NavbarModule { }