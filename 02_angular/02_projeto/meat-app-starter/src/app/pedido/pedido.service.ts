import { LoginService } from 'app/security/login/login.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { ItemCarrinho } from './../detalhe-restaurante/carrinho/item-carrinho.model';
import { CarrinhoService } from './../detalhe-restaurante/carrinho/carrinho.service';
import { Pedido } from './pedido.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from '../app.api';

@Injectable()
export class PedidoService {

  constructor(
    private carrinhoService: CarrinhoService,
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  valorDosItens(): number {
    return this.carrinhoService.total();
  }

  itensDoCarrinho(): ItemCarrinho[] {
    return this.carrinhoService.itens;
  }

  aumentarQuantidade(item: ItemCarrinho) {
    this.carrinhoService.aumentarQuantidade(item);
  }

  diminuirQuantidade(item: ItemCarrinho) {
    this.carrinhoService.diminuirQuantidade(item);
  }

  remover(item: ItemCarrinho) {
    this.carrinhoService.removerItem(item);
  }

  finalizarPedido(pedido: Pedido): Observable<string> {
    let headers = new HttpHeaders();
    if (this.loginService.isLogged()) {
      headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
    }

    return this.http.post<Pedido>(`${MEAT_API}pedidos`, pedido, { headers: headers })
      .map(responsePedido => responsePedido.id);
  }

  limpar() {
    this.carrinhoService.limpar();
  }
}
