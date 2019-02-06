import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Restaurante } from './restaurante/restaurante.model';

import { MEAT_API } from '../app.api';

@Injectable()
export class RestauranteService {

  constructor(private http: Http) { }

  buscar(): Observable<Restaurante[]> {
    return this.http.get(`${MEAT_API}restaurants`)
      .map(response =>
        response.json());
  }
}
