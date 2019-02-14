import { NgModule } from '@angular/core';
import { CarrinhoService } from 'app/detalhe-restaurante/carrinho/carrinho.service';
import { PedidoService } from 'app/pedido/pedido.service';
import { RestauranteService } from 'app/restaurantes/restaurantes.service';

@NgModule({
  providers: [
    CarrinhoService,
    PedidoService,
    RestauranteService
  ]
})
export class CoreModule { }
