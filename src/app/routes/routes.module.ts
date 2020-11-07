import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutesRoutingModule } from './routes-routing.module';

import { RoutesListComponent } from './routes-list/routes-list.component';
import { RouteItemComponent } from './route-item/route-item.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import { RoutesPageComponent } from './routes-page/routes-page.component';
import { RouteSearchComponent } from './route-search/route-search.component';

import { TripsModule } from '../trips/trips.module';
import { MapModule } from '../shared/components/map/map.module';

@NgModule({
  declarations: [
    RoutesPageComponent,
    RoutesListComponent,
    RouteItemComponent,
    RouteDetailComponent,
    RouteSearchComponent
  ],
  imports: [
    RoutesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TripsModule,
    MapModule
  ]
})
export class RoutesModule { }
