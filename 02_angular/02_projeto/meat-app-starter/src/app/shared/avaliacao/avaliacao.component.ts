import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-avaliacao',
  templateUrl: './avaliacao.component.html',
  styles: []
})
export class AvaliacaoComponent implements OnInit {

  @Output() avaliado = new EventEmitter<number>();

  estrelas: number[] = [1, 2, 3, 4, 5];

  estrelaValor = 0;

  estrelaHover: number;

  constructor() { }

  ngOnInit() {
  }

  avaliar(estrelaSelecionada: number) {
    this.estrelaValor = estrelaSelecionada;
    this.estrelaHover = undefined;
    this.avaliado.emit(this.estrelaValor);
  }

  hover(estrelaHover: number) {
    if (this.estrelaHover === undefined) {
      this.estrelaHover = this.estrelaValor;
    }

    this.estrelaValor = estrelaHover;
  }

  limparEstrelaHover() {
    if (this.estrelaHover !== undefined) {
      this.estrelaValor = this.estrelaHover;
      this.estrelaHover = undefined;
    }
  }

}
