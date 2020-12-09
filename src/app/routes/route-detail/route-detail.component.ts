import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/core/objects/routes/route.service';
import { Trip } from 'src/app/core/objects/trips/trip';
import { TripsService } from 'src/app/core/objects/trips/trips.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

import { Route } from '../../core/objects/routes/route';
import { ShapeService } from 'src/app/core/objects/shapes/shape.service';
import { MapComponent } from 'src/app/shared/components/map/map.component';

@Component({
  selector: 'iti-route-detail',
  templateUrl: './route-detail.component.html'
})
export class RouteDetailComponent implements OnInit {

  route: Route = null;
  trips: Trip[];

  @ViewChild('map') map: MapComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private routeService: RouteService,
    private tripsService: TripsService,
    private shapeService: ShapeService,
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
            data => {
              this.trips = data;

              this.shapeService.getShapesByTrip(this.trips[0].trip_id).subscribe(
                data => {
                  const lista_coordenadas = [];

                  data.forEach(item => {
                    lista_coordenadas.push([item.shape_pt_lon, item.shape_pt_lat]);
                  });

                  this.map.add_line(lista_coordenadas);
                }
              );
            },
            () => this.alert.danger("Erro ao carregar os trajetos!")
          );
        },
        () => this.alert.danger("Erro ao localizar a rota!")
      );
    });
  }

  voltar() {
    this._location.back();
  }
}
