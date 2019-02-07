import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestauranteService } from 'app/restaurantes/restaurantes.service';
import { Restaurante } from 'app/restaurantes/restaurante/restaurante.model';

@Component({
  selector: 'mt-detalhe-restaurante',
  templateUrl: './detalhe-restaurante.component.html'
})
export class DetalheRestauranteComponent implements OnInit {

  restaurante: Restaurante;

  constructor(
    private restauranteService: RestauranteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restauranteService.buscarPorId(this.route.snapshot.params['id'])
      .subscribe(response =>
        this.restaurante = response);
  }
}
