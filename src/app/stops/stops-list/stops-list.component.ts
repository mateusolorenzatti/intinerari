import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

import { Stop } from 'src/app/core/objects/stops/stop';
import { StopService } from 'src/app/core/objects/stops/stop.service';

@Component({
  selector: 'iti-stops-list',
  templateUrl: './stops-list.component.html'
})
export class StopsListComponent implements OnInit {

  stops: Stop[] = [];

  MENSAGEM: string[] = ["Nada por enquanto ...", "Nada foi encontrado, tente novamente!"];
  msgStatus: number = 0;

  constructor(private stopService: StopService, private alert: AlertService) { }

  ngOnInit(): void {  }

  atualizarTrips(descricao: string = ''): void {
    this.stopService.getStops(descricao).subscribe(
      data => {
        this.stops = data;
        this.stops.length === 0 ? this.msgStatus = 1 : this.msgStatus = 0;
      },
      err => this.alert.danger("Falha ao buscar as Rotas!")
    );
  }

  limparRotas() {
    this.stops = [];
    this.msgStatus = 0;
  }

}
