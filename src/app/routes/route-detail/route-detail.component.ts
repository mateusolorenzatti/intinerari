import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/core/objects/routes/route.service';
import { Trip } from 'src/app/core/objects/trips/trip';
import { TripsService } from 'src/app/core/objects/trips/trips.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

import { Route } from '../../core/objects/routes/route';

@Component({
  selector: 'iti-route-detail',
  templateUrl: './route-detail.component.html'
})
export class RouteDetailComponent implements OnInit {

  route: Route = null;
  trips: Trip[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private routeService: RouteService,
    private tripsService: TripsService,
    private alert: AlertService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.route_id;

      this.routeService.getRoute(id).subscribe(
        data => {
          this.route = data;

          this.tripsService.getTripsByRoute(id).subscribe(
              data => this.trips = data,
              () => this.alert.danger("Erro ao carregar os trajetos!")
          );
        },
        () => this.alert.danger("Erro ao localizar a rota!")
      );
    });
  }

  voltar(){
    this._location.back();
  }
}
