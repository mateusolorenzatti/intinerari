import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const API_URL = environment.API_URL;

const api_routes = {
  routes: API_URL + "/routes",
  route_id: API_URL + "/routes/id",

  stops: API_URL + "/stops",
  stop_id: API_URL + "/stops/id",
  stops_by_trip: API_URL + "/stops/by_trip",
  
  stop_times_by_trip: API_URL + "/stop_times/by_trip",

  trips: API_URL + "/trips",
  trip_id: API_URL + "/trips/id",
  trips_by_route: API_URL + "/trips/by_route",
  trips_by_stop: API_URL + "/trips/by_stop",

  shapes_by_trip: API_URL + "/shapes/by_trip",
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public routes(): string {
    return api_routes.routes;
  }

  public route_id(): string {
    return api_routes.route_id;
  }

  public stops(): string {
    return api_routes.stops;
  }

  public stop_id(): string {
    return api_routes.stop_id;
  }

  public stops_by_trip(): string {
    return api_routes.stops_by_trip;
  }

  public stop_times_by_trip(): string {
    return api_routes.stop_times_by_trip;
  }

  public trips(): string {
    return api_routes.trips;
  }

  public trip_id(): string {
    return api_routes.trip_id;
  }

  public trips_by_route(): string {
    return api_routes.trips_by_route;
  }

  public trips_by_stop(): string {
    return api_routes.trips_by_stop;
  }

  public shapes_by_trip(): string {
    return api_routes.shapes_by_trip;
  }

}
