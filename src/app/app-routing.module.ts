import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'routes',
    loadChildren: () => import('src/app/routes/routes.module').then(m => m.RoutesModule)
  },
  {
    path: 'stops',
    loadChildren: () => import('src/app/stops/stops.module').then(m => m.StopsModule)
  },
  {
    path: 'trips',
    loadChildren: () => import('src/app/trips/trips.module').then(m => m.TripsModule)
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
