import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripItemComponent } from './trip-item/trip-item.component';
import { MapModule } from '../shared/components/map/map.module';

@NgModule({
  declarations: [
    TripItemComponent
  ],
  imports: [
    CommonModule,
    MapModule
  ],
  exports: [
    TripItemComponent
  ]
})
export class TripsModule { }
