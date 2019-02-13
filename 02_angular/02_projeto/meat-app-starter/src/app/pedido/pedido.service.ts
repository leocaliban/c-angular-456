import { Injectable } from '@angular/core';

import { ItemCarrinho } from './../detalhe-restaurante/carrinho/item-carrinho.model';
import { CarrinhoService } from './../detalhe-restaurante/carrinho/carrinho.service';

@Injectable()
export class PedidoService {

  constructor(private carrinhoService: CarrinhoService) { }

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
}
