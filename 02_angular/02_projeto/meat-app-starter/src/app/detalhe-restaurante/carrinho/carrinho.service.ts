import { NotificacaoService } from './../../shared/messages/notificacao.service';
import { Injectable } from '@angular/core';
import { ItemMenu } from './../item-menu/item-menu.model';
import { ItemCarrinho } from './item-carrinho.model';

@Injectable()
export class CarrinhoService {

  itens: ItemCarrinho[] = [];

  constructor(
    private notificacaoService: NotificacaoService
  ) { }

  limpar() {
    this.itens = [];
  }

  adicionarItem(item: ItemMenu) {
    let foundItem = this.itens.find((itemDoCarrinho) => itemDoCarrinho.itemMenu.id === item.id);
    if (foundItem) {
      this.aumentarQuantidade(foundItem);
    } else {
      this.itens.push(new ItemCarrinho(item));
    }
    this.notificacaoService.notificar(`Você adicionou o item ${item.name}.`);
  }

  aumentarQuantidade(item: ItemCarrinho) {
    item.quantity++;
  }

  diminuirQuantidade(item: ItemCarrinho) {
    item.quantity--;
    if (item.quantity === 0) {
      this.removerItem(item);
    }
  }

  removerItem(item: ItemCarrinho) {
    this.itens.splice(this.itens.indexOf(item), 1);
    this.notificacaoService.notificar(`Você removeu o item ${item.itemMenu.name}.`);
  }

  total(): number {
    return this.itens.map(
      item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
