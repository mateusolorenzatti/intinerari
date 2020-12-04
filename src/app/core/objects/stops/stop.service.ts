import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Stop } from './stop';
import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class StopService {

  constructor(private http: HttpClient, private api: ApiService) { }

  public getStops(descricao: string): Observable<Stop[]> {
    return this.http.get<Stop[]>(this.api.stops() + "/" + (descricao ? descricao : '') );
  }

  public getStop(id: string): Observable<Stop> {
    return this.http.get<Stop>(this.api.stop_id() + "/" + id);
  }
}
