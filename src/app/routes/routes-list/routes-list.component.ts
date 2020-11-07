import { Component, OnInit } from '@angular/core';

import { Route } from '../../core/objects/routes/route';
import { RouteService } from '../../core/objects/routes/route.service';

import { AlertService } from '../../shared/components/alert/alert.service';

@Component({
  selector: 'iti-routes-list',
  templateUrl: './routes-list.component.html',
})
export class RoutesListComponent implements OnInit {

  routes: Route[] = [];

  MENSAGEM: string[] = ["Nada por enquanto ...", "Nada foi encontrado, tente novamente!"];
  msgStatus: number = 0;

  constructor(private routeService: RouteService, private alert: AlertService) { }

  ngOnInit(): void {  }

  atualizarTrips(descricao: string = ''): void {
    this.routeService.getRoutes(descricao).subscribe(
      data => {
        this.routes = data;
        this.routes.length == 0 ? this.msgStatus = 1 : this.msgStatus = 0;
      },
      err => this.alert.danger("Falha ao buscar as Rotas!")
    );
  }

  limparRotas() {
    this.routes = [];
    this.msgStatus = 0;
  }
}
