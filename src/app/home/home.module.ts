import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeItemComponent } from './home-item/home-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeItemComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
