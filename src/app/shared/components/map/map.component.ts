import { environment } from '../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';

import * as mapboxgl from "mapbox-gl/dist/mapbox-gl"

@Component({
  selector: 'iti-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor() { }

  ngOnInit() {
    mapboxgl.accessToken = environment.mapbox.accessToken;

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-51.346179, -29.225594],
      zoom: 12
    });
  }

  add_line(coordenadas: number[][], cor: string = '#ff0000') {
    this.map.on('load', () => {
      this.map.addSource('route', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': coordenadas
          }
        }
      });

      this.map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': cor,
          'line-width': 5
        }
      });
    });
  }

  add_point(coordenadas: number[]) {
    this.map.on('load', () => {
      this.map.setCenter(coordenadas);

      const marker = new mapboxgl.Marker()
        .setLngLat(coordenadas)
        .addTo(this.map);
    });
  }
}
