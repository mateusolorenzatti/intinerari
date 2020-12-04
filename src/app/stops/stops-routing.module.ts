import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StopsPageComponent } from './stops-page/stops-page.component';
import { StopDetailComponent } from './stop-detail/stop-detail.component';

const routes: Routes = [
  {
    path: '',
    component: StopsPageComponent
  },
  {
    path: ':stop_id',
    component: StopDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StopsRoutingModule { }
