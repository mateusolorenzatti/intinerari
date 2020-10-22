import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iti-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input('nomeItem') nomeItem: string;
  @Input('icon') icon: string;

  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton() {
    this.onClick.emit();
  }
}
