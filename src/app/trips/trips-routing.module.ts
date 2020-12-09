import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fromEventPattern } from 'rxjs';

import { TripDetailComponent } from './trip-detail/trip-detail.component'

const routes: Routes = [
  {
    path: ':trip_id',
    component: TripDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
