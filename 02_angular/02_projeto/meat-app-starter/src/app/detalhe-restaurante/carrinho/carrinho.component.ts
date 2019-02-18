import { CarrinhoService } from './carrinho.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'mt-carrinho',
  templateUrl: './carrinho.component.html',
  preserveWhitespaces: true,
  animations: [
    trigger('linha', [
      state('pronto', style({
        opacity: 1
      })),
      transition('void => pronto',
        animate('300ms 0s ease-in',
          keyframes([
            style({
              opacity: 0,
              transform: 'translateX(-30px)',
              offset: 0
            }),
            style({
              opacity: 0.8,
              transform: 'translateX(-10px)',
              offset: 0.8
            }),
            style({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 1
            })
          ]))
      ),
      transition('pronto => void',
        animate('300ms 0s ease-out',
          keyframes([
            style({
              opacity: 1,
              transform: 'translateX(0px)',
              offset: 0
            }),
            style({
              opacity: 0.8,
              transform: 'translateX(-10px)',
              offset: 0.2
            }),
            style({
              opacity: 0,
              transform: 'translateX(30px)',
              offset: 1
            })
          ]))
      )
    ])
  ]
})
export class CarrinhoComponent implements OnInit {

  estadoDaLinha = 'pronto';

  constructor(
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
  }

  itens(): any[] {
    return this.carrinhoService.itens;
  }

  total(): number {
    return this.carrinhoService.total();
  }

  limpar() {
    this.carrinhoService.limpar();
  }

  removerItem(item: any) {
    this.carrinhoService.removerItem(item);
  }

  adicionarItem(item: any) {
    this.carrinhoService.adicionarItem(item);
  }

}
