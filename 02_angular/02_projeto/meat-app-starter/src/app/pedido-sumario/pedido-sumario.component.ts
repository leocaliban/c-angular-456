import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-pedido-sumario',
  templateUrl: './pedido-sumario.component.html',
  styles: []
})
export class PedidoSumarioComponent implements OnInit {

  avaliado: boolean;

  constructor() { }

  ngOnInit() {
  }

  avaliar() {
    this.avaliado = true;
  }

}
