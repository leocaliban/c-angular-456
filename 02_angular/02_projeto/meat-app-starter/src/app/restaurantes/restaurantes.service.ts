import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ErrorHandler } from '../app.error-handler';

import { Restaurante } from './restaurante/restaurante.model';
import { ItemMenu } from './../detalhe-restaurante/item-menu/item-menu.model';
import { MEAT_API } from '../app.api';

@Injectable()
export class RestauranteService {

  constructor(private http: Http) { }

  buscar(busca?: string): Observable<Restaurante[]> {
    return this.http.get(`${MEAT_API}restaurants`, { params: { q: busca } })
      .map(response =>
        response.json())
      .catch(ErrorHandler.handleError);
  }

  buscarPorId(id: string): Observable<Restaurante> {
    return this.http.get(`${MEAT_API}restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  reviewsDoRestaurante(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  menuDoRestaurante(id: string): Observable<ItemMenu[]> {
    return this.http.get(`${MEAT_API}restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }
}
