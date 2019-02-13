import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-custos',
  templateUrl: './custos.component.html',
  styles: []
})
export class CustosComponent implements OnInit {

  @Input() frete: number;
  @Input() valorDosItens: number;

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.frete + this.valorDosItens;
  }

}
