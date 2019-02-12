import { ItemCarrinho } from './../../detalhe-restaurante/carrinho/item-carrinho.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-itens-de-pedido',
  templateUrl: './itens-de-pedido.component.html',
  styles: []
})
export class ItensDePedidoComponent implements OnInit {

  @Input() itens: ItemCarrinho[];

  @Output() aumentarQuantidade = new EventEmitter<ItemCarrinho>();
  @Output() diminuirQuantidade = new EventEmitter<ItemCarrinho>();

  @Output() remover = new EventEmitter<ItemCarrinho>();

  constructor() { }

  ngOnInit() {
  }

  emitAumentarQuantidade(item: ItemCarrinho) {
    this.aumentarQuantidade.emit(item);
  }

  emitDiminuirQuantidade(item: ItemCarrinho) {
    this.diminuirQuantidade.emit(item);
  }

  emitRemover(item: ItemCarrinho) {
    this.remover.emit(item);
  }

}
