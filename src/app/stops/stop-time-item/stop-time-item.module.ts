import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopTimeItemComponent } from './stop-time-item.component';
import { StopsRoutingModule } from '../stops-routing.module';

@NgModule({
  declarations: [ StopTimeItemComponent ],
  exports: [ StopTimeItemComponent ],
  imports: [
    CommonModule,
    StopsRoutingModule
  ]
})
export class StopTimeItemModule { }
