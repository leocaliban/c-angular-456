import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Restaurante } from './restaurante/restaurante.model';
import { ItemMenu } from './../detalhe-restaurante/item-menu/item-menu.model';
import { MEAT_API } from '../app.api';

import { Observable } from 'rxjs';

@Injectable()
export class RestauranteService {

  constructor(private http: HttpClient) { }

  buscar(busca?: string): Observable<Restaurante[]> {
    let params: HttpParams = undefined;
    if (busca) {
      params = new HttpParams().set('q', busca);
    }

    return this.http.get<Restaurante[]>(`${MEAT_API}restaurants`, { params: params });
  }

  buscarPorId(id: string): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${MEAT_API}restaurants/${id}`);
  }

  reviewsDoRestaurante(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}restaurants/${id}/reviews`);
  }

  menuDoRestaurante(id: string): Observable<ItemMenu[]> {
    return this.http.get<ItemMenu[]>(`${MEAT_API}restaurants/${id}/menu`);
  }
}
