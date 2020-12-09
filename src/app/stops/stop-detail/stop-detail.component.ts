import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Trip } from 'src/app/core/objects/trips/trip';
import { Stop } from 'src/app/core/objects/stops/stop';
import { TripsService } from 'src/app/core/objects/trips/trips.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { StopService } from 'src/app/core/objects/stops/stop.service';
import { MapComponent } from 'src/app/shared/components/map/map.component';

@Component({
  selector: 'iti-stop-detail',
  templateUrl: './stop-detail.component.html'
})
export class StopDetailComponent implements OnInit {

  stop: Stop = null;
  trips: Trip[];

  @ViewChild('map') map: MapComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private stopService: StopService,
    private tripsService: TripsService,
    private alert: AlertService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.stop_id;

      this.stopService.getStop(id).subscribe(
        data => {
          this.stop = data;

          this.tripsService.getTripsByStop(id).subscribe(
              data => this.trips = data,
              () => this.alert.danger("Erro ao carregar os trajetos!")
          );
          
          this.map.add_point([this.stop.stop_lon, this.stop.stop_lat]);
        },
        () => this.alert.danger("Erro ao localizar a rota!")
      );
    });
  }

  voltar(){
    this._location.back();
  }
}
