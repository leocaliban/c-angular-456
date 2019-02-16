import { RestauranteService } from './restaurantes.service';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurante/restaurante.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  animations: [
    trigger('search-visibility', [
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *',
        animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantesComponent implements OnInit {

  estadoCampoDeBusca = 'hidden';

  restaurantes: Restaurante[];

  constructor(
    private restauranteService: RestauranteService
  ) { }

  ngOnInit() {
    this.restauranteService.buscar()
      .subscribe(response =>
        this.restaurantes = response);
  }

  toggleSearch() {
    this.estadoCampoDeBusca = this.estadoCampoDeBusca === 'hidden' ? 'visible' : 'hidden';
  }

}
