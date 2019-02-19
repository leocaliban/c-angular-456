import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestauranteService } from 'app/restaurantes/restaurantes.service';
import { ItemMenu } from '../item-menu/item-menu.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<ItemMenu[]>;

  constructor(
    private restauranteService: RestauranteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restauranteService.menuDoRestaurante(this.route.parent.snapshot.params['id']);
  }

  addItemMenu(item: ItemMenu) {
    console.log(item);
  }

}
