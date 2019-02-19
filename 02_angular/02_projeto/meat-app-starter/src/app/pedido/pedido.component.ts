import { ItemCarrinho } from './../detalhe-restaurante/carrinho/item-carrinho.model';
import { PedidoService } from './pedido.service';
import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { Pedido, ItemDePedido } from './pedido.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';

import { tap } from 'rxjs/operators';

@Component({
  selector: 'mt-pedido',
  templateUrl: './pedido.component.html',
  styles: []
})
export class PedidoComponent implements OnInit {

  emailPadrao = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  numeroPadrao = /^[0-9]*$/;

  formularioDePedido: FormGroup;

  frete = 8;

  pedidoId: string;

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

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get('email');
    const emailConfirmacao = group.get('emailConfirmacao');
    if (!email || !emailConfirmacao) {
      return undefined;
    }

    if (email.value !== emailConfirmacao.value) {
      return { emailDiferente: true };
    }
    return undefined;
  }

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.formularioDePedido = new FormGroup({
      nome: new FormControl('', {
        validators: [Validators.required, Validators.minLength(5)]
      }),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPadrao)]),
      emailConfirmacao: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPadrao)]),
      endereco: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      numero: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numeroPadrao)]),
      enderecoOpcional: this.formBuilder.control(''),
      opcaoDePagamento: this.formBuilder.control('', [Validators.required])
    },
      {
        validators: [PedidoComponent.equalsTo],
        updateOn: 'blur'
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

  isPedidoCompleto(): boolean {
    return this.pedidoId !== undefined;
  }

  finalizarPedido(pedido: Pedido) {
    pedido.itensDePedido = this.itensDoCarrinho().map((item: ItemCarrinho) => new ItemDePedido(item.quantity, item.itemMenu.id));

    this.pedidoService.finalizarPedido(pedido)
      .pipe(
        tap((pedidoId: string) => {
          this.pedidoId = pedidoId;
        })
      )
      .subscribe((pedidoId: string) => {
        this.router.navigate(['/pedido-sumario']);
        this.pedidoService.limpar();
      });
  }

}
