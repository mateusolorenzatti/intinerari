import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Shape } from './shape';
import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  constructor(private http: HttpClient, private api: ApiService) { }

  public getShapesByTrip(trip_id: string): Observable<Shape[]> {
    return this.http.get<Shape[]>(this.api.shapes_by_trip() + "/" + trip_id);
  }
}
