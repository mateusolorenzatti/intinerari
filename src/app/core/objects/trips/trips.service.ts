import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Trip } from './trip';
import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient, private api: ApiService) { }

  public getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.api.trips());
  }

  public getTrip(trip_id: string): Observable<Trip> {
    return this.http.get<Trip>(this.api.trip_id() + '/' + trip_id);
  }

  public getTripsByRoute(route_id: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.api.trips_by_route() + "/" + route_id);
  }

  public getTripsByStop(stop_id: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.api.trips_by_stop() + "/" + stop_id);
  }
}
