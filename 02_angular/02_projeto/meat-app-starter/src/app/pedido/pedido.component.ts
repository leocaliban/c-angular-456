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

  constructor() { }

  ngOnInit() {
  }

}
