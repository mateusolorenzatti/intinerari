import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Trip } from 'src/app/core/objects/trips/trip';
import { StopTime } from 'src/app/core/objects/stop-times/stop-time';
import { MapComponent } from 'src/app/shared/components/map/map.component';
import { StopTimeService } from 'src/app/core/objects/stop-times/stop-time.service';
import { TripsService } from 'src/app/core/objects/trips/trips.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ShapeService } from 'src/app/core/objects/shapes/shape.service';
import { cpuUsage } from 'process';

@Component({
  selector: 'iti-trip-detail',
  templateUrl: './trip-detail.component.html'
})
export class TripDetailComponent implements OnInit {

  trip: Trip = null;
  stops: StopTime[];

  infoAdicionais: boolean = false;
  tabela: boolean = false;

  @ViewChild('map') map: MapComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tripsService: TripsService,
    private stopService: StopTimeService,
    private shapeService: ShapeService,
    private alert: AlertService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.trip_id;

      this.tripsService.getTrip(id).subscribe(
        data => {
          this.trip = data;

          this.shapeService.getShapesByTrip(id).subscribe(
            data => {
              const lista_coordenadas = [];

              data.forEach(item => {
                lista_coordenadas.push([item.shape_pt_lon, item.shape_pt_lat]);
              });

              this.map.add_line(lista_coordenadas);
            }
          );

          this.stopService.getStopTimesByTrip(id).subscribe(
            data => {
              this.stops = data;

              const lista_coordenadas = [];

              data.forEach(item => {
                lista_coordenadas.push([item.stop.stop_lon, item.stop.stop_lat]);
              });

              this.map.add_multi_points(lista_coordenadas);
            }
          );

        },
        () => this.alert.danger("Erro ao localizar a rota!")
      );
    });
  }

  voltar() {
    this._location.back();
  }

  toggle(componente: string) {
    this.infoAdicionais = componente === 'infoAdicionais'? !this.infoAdicionais : this.infoAdicionais;
    this.tabela = componente === 'tabela'? !this.tabela : this.tabela;
  }
}
