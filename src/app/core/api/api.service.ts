import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const API_URL = environment.API_URL;

const api_routes = {
  routes: API_URL + "/routes",
  route_id: API_URL + "/routes/id",

  trips: API_URL + "/trips",
  trips_by_route: API_URL + "/trips/by_route",

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

  public trips(): string {
    return api_routes.trips;
  }

  public trips_by_route(): string {
    return api_routes.trips_by_route;
  }

  public shapes_by_trip(): string {
    return api_routes.shapes_by_trip;
  }

}
