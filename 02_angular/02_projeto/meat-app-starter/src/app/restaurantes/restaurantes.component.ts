import { RestauranteService } from './restaurantes.service';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurante/restaurante.model';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html'
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[];

  constructor(
    private restauranteService: RestauranteService
  ) { }

  ngOnInit() {
    this.restauranteService.buscar()
      .subscribe(response =>
        this.restaurantes = response);
  }

}
