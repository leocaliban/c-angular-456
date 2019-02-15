import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemMenu } from './item-menu.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'mt-item-menu',
  templateUrl: './item-menu.component.html',
  animations: [
    trigger('item-visibility', [
      state('pronto', style({
        opacity: 1
      })),
      transition('void => pronto', [
        style({
          opacity: 0,
          transform: 'translateY(-20px)'
        }),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class ItemMenuComponent implements OnInit {

  estadoDoItem = 'pronto';

  @Input() itemMenu: ItemMenu;
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.itemMenu);
  }

}
