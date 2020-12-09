import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLocationComponent } from './page-location.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RoutesRoutingModule } from 'src/app/routes/routes-routing.module';

@NgModule({
  declarations: [PageLocationComponent],
  exports: [PageLocationComponent],
  imports: [
    RoutesRoutingModule,
    CommonModule
  ]
})
export class PageLocationModule { }
