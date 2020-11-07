import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Route } from './route';
import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient, private api: ApiService) { }

  public getRoutes(descricao: string): Observable<Route[]> {
    return this.http.get<Route[]>(this.api.routes() + "/" + (descricao ? descricao : '') );
  }

  public getRoute(id: string): Observable<Route> {
    return this.http.get<Route>(this.api.route_id() + "/" + id);
  }
}
