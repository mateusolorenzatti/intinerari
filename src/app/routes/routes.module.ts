import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';

import { RoutesListComponent } from './routes-list/routes-list.component';
import { RouteItemComponent } from './route-item/route-item.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import { RoutesPageComponent } from './routes-page/routes-page.component';

import { TripsModule } from '../trips/trips.module';
import { MapModule } from '../shared/components/map/map.module';
import { SearchModule } from '../shared/components/search/search.module';
import { PageLocationModule } from '../shared/components/page-location/page-location.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    RoutesPageComponent,
    RoutesListComponent,
    RouteItemComponent,
    RouteDetailComponent
  ],
  imports: [
    RoutesRoutingModule,
    CommonModule,

    TripsModule,
    MapModule,
    SearchModule,
    PageLocationModule
  ]
})
export class RoutesModule { }
