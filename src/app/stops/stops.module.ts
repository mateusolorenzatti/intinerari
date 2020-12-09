import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopsPageComponent } from './stops-page/stops-page.component';
import { StopsListComponent } from './stops-list/stops-list.component';
import { StopItemComponent } from './stop-item/stop-item.component';
import { StopDetailComponent } from './stop-detail/stop-detail.component';
import { StopsRoutingModule } from './stops-routing.module';
import { SearchModule } from '../shared/components/search/search.module';
import { MapModule } from '../shared/components/map/map.module';
import { TripsModule } from '../trips/trips.module';
import { PageLocationModule } from '../shared/components/page-location/page-location.module';
import { BrowserModule } from '@angular/platform-browser';
import { StopTimeItemComponent } from './stop-time-item/stop-time-item.component';

@NgModule({
  declarations: [
    StopsPageComponent,
    StopsListComponent,
    StopItemComponent,
    StopDetailComponent,
    StopItemComponent,
    StopDetailComponent,
    StopTimeItemComponent
  ],
  exports: [
    StopTimeItemComponent
  ],
  imports: [
    StopsRoutingModule,
    CommonModule,

    SearchModule,
    MapModule,
    TripsModule,
    PageLocationModule
  ]
})
export class StopsModule { }
