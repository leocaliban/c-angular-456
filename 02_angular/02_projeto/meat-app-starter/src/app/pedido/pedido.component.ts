import { ItemCarrinho } from './../detalhe-restaurante/carrinho/item-carrinho.model';
import { PedidoService } from './pedido.service';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';

@Component({
  selector: 'mt-pedido',
  templateUrl: './pedido.component.html',
  styles: []
})
export class PedidoComponent implements OnInit {

  opcoesDePagamento: RadioOption[] = [
    {
      label: 'Dinheiro',
      value: 'MON'
    },
    {
      label: 'Cartão de Débito',
      value: 'DEB'
    },
    {
      label: 'Cartão Refeição',
      value: 'REF'
    }
  ];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
  }

  itensDoCarrinho(): ItemCarrinho[] {
    return this.pedidoService.itensDoCarrinho();
  }

  aumentarQuantidade(item: ItemCarrinho) {
    this.pedidoService.aumentarQuantidade(item);
  }

  diminuirQuantidade(item: ItemCarrinho) {
    this.pedidoService.diminuirQuantidade(item);
  }

  remover(item: ItemCarrinho) {
    this.pedidoService.remover(item);
  }

}
