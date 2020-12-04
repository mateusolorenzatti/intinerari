import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { StopsListComponent } from '../stops-list/stops-list.component';

@Component({
  selector: 'app-stops-page',
  templateUrl: './stops-page.component.html'
})
export class StopsPageComponent implements OnInit {

  @ViewChild('stopsList') routesList: StopsListComponent;
  @ViewChild('stopsSearch') routesSearch: SearchComponent;

  constructor( ) { }

  ngOnInit(): void { }

  filtrar(): void{
    this.routesList.atualizarTrips(this.routesSearch.getDescricao());
  }

  limpar(){
    this.routesList.limparRotas();
  }
}
