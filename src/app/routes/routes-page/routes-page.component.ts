import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchComponent } from 'src/app/shared/components/search/search.component';

import { RoutesListComponent } from '../routes-list/routes-list.component';

@Component({
  selector: 'iti-routes',
  templateUrl: './routes-page.component.html'
})
export class RoutesPageComponent implements OnInit {

  @ViewChild('routesList') routesList: RoutesListComponent;
  @ViewChild('routesSearch') routesSearch: SearchComponent;

  constructor( ) { }

  ngOnInit(): void { }

  filtrar(): void{
    this.routesList.atualizarTrips(this.routesSearch.getDescricao());
  }

  limpar(){
    this.routesList.limparRotas();
  }

}
