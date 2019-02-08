import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemMenu } from './item-menu.model';

@Component({
  selector: 'mt-item-menu',
  templateUrl: './item-menu.component.html'
})
export class ItemMenuComponent implements OnInit {

  @Input() itemMenu: ItemMenu;
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.itemMenu);
  }

}
