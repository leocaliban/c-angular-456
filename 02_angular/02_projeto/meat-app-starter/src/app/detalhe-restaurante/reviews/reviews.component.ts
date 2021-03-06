import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestauranteService } from 'app/restaurantes/restaurantes.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(
    private restauranteService: RestauranteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reviews = this.restauranteService.reviewsDoRestaurante(this.route.parent.snapshot.params['id']);
  }

}
