import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { StopTime } from './stop-time';
import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class StopTimeService {

  constructor(private http: HttpClient, private api: ApiService) { }

  public getStopTimesByTrip(trip_id: string): Observable<StopTime[]> {
    return this.http.get<StopTime[]>(this.api.stop_times_by_trip() + "/" + trip_id);
  }
}
