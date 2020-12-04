import { Component, Input, OnInit } from '@angular/core';

import { Stop } from 'src/app/core/objects/stops/stop';

@Component({
  selector: 'iti-stop-item',
  templateUrl: './stop-item.component.html'
})
export class StopItemComponent implements OnInit {

  @Input() stop: Stop;

  constructor() { }

  ngOnInit(): void {
  }

}
