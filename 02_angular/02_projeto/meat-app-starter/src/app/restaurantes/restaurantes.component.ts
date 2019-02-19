import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RestauranteService } from './restaurantes.service';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurante/restaurante.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { from } from 'rxjs';
import { distinctUntilChanged, debounceTime, switchMap, catchError } from 'rxjs/operators';

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

  formularioDeBusca: FormGroup;
  searchControl: FormControl;

  constructor(
    private restauranteService: RestauranteService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.searchControl = this.formBuilder.control('');
    this.formularioDeBusca = this.formBuilder.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(response =>
          this.restauranteService.buscar(response)
            .pipe(
              catchError(error =>
                from([]))
            )
        )
      )
      .subscribe(restaurantesResponse =>
        this.restaurantes = restaurantesResponse);

    this.restauranteService.buscar()
      .subscribe(response =>
        this.restaurantes = response);
  }

  toggleSearch() {
    this.estadoCampoDeBusca = this.estadoCampoDeBusca === 'hidden' ? 'visible' : 'hidden';
  }

}
