import { ItemCarrinho } from './../detalhe-restaurante/carrinho/item-carrinho.model';
import { PedidoService } from './pedido.service';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { Pedido, ItemDePedido } from './pedido.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mt-pedido',
  templateUrl: './pedido.component.html',
  styles: []
})
export class PedidoComponent implements OnInit {

  formularioDePedido: FormGroup;

  frete = 8;

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

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formularioDePedido = this.formBuilder.group({
      nome: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      emailConfirmacao: this.formBuilder.control(''),
      endereco: this.formBuilder.control(''),
      numero: this.formBuilder.control(''),
      enderecoOpcional: this.formBuilder.control(''),
      opcaoDePagamento: this.formBuilder.control('')
    });
  }

  valorDosItens(): number {
    return this.pedidoService.valorDosItens();
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

  finalizarPedido(pedido: Pedido) {
    pedido.itensDePedido = this.itensDoCarrinho().map((item: ItemCarrinho) => new ItemDePedido(item.quantity, item.itemMenu.id));

    this.pedidoService.finalizarPedido(pedido)
      .subscribe((pedidoId: string) => {
        console.log(`Compra concluída: ${pedidoId}`);
        this.router.navigate(['/pedido-sumario']);
        this.pedidoService.limpar();
      });
  }

}
