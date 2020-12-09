import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iti-page-location',
  templateUrl: './page-location.component.html'
})
export class PageLocationComponent implements OnInit {

  @Input() nome: string;

  constructor() { }

  ngOnInit(): void {
  }

}
