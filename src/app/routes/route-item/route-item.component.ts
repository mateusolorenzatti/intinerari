import { Component, Input, OnInit } from '@angular/core';

import { Route } from '../../core/objects/routes/route';

@Component({
  selector: 'iti-route-item',
  templateUrl: './route-item.component.html',
})
export class RouteItemComponent implements OnInit {

  @Input() route: Route;

  constructor() { }

  ngOnInit(): void {
  }

}
