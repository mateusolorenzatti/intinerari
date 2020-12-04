import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Shape } from 'src/app/core/objects/shapes/shape';
import { ShapeService } from 'src/app/core/objects/shapes/shape.service';
import { MapComponent } from 'src/app/shared/components/map/map.component';

import { Trip } from '../../core/objects/trips/trip';

@Component({
  selector: 'iti-trip-item',
  templateUrl: './trip-item.component.html'
})
export class TripItemComponent implements OnInit {

  @Input() trip: Trip;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
