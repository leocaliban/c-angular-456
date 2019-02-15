import { Component, OnInit, Input } from '@angular/core';

import { Restaurante } from './restaurante.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html',
  animations: [
    trigger('restaurantes-visibility', [
      state('pronto', style({
        opacity: 1
      })),
      transition('void => pronto', [
        style({
          opacity: 0,
          transform: 'translate(-30px, -10px)'
        }),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestauranteComponent implements OnInit {

  estadoDoRestaurante = 'pronto';

  @Input() restaurante: Restaurante;

  constructor() { }

  ngOnInit() {
  }

}
