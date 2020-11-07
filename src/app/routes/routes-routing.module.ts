import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesPageComponent } from './routes-page/routes-page.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';

const routes: Routes = [
  {
    path: '',
    component: RoutesPageComponent
  },
  {
    path: ':route_id',
    component: RouteDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
