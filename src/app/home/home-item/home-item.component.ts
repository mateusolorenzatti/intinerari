import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iti-home-item',
  templateUrl: './home-item.component.html'
})
export class HomeItemComponent implements OnInit {

  @Input() icon: string;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
