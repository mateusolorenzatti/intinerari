import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripItemComponent } from './trip-item/trip-item.component';
import { MapModule } from '../shared/components/map/map.module';

import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { TripsRoutingModule } from './trips-routing.module';
import { StopsModule } from '../stops/stops.module';

@NgModule({
  declarations: [
    TripItemComponent,
    TripDetailComponent
  ],
  imports: [
    TripsRoutingModule,
    CommonModule,
    MapModule,
    StopsModule
  ],
  exports: [
    TripItemComponent
  ]
})
export class TripsModule { }
