import { Component, Input, OnInit } from '@angular/core';
import { StopTime } from 'src/app/core/objects/stop-times/stop-time';

@Component({
  selector: 'iti-stop-time-item',
  templateUrl: './stop-time-item.component.html'
})
export class StopTimeItemComponent implements OnInit {

  @Input() stop_t: StopTime;

  constructor() { }

  ngOnInit(): void {
  }

}
