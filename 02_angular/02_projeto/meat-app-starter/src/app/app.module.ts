import { PedidoService } from './pedido/pedido.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestauranteService } from './restaurantes/restaurantes.service';
import { DetalheRestauranteComponent } from './detalhe-restaurante/detalhe-restaurante.component';
import { MenuComponent } from './detalhe-restaurante/menu/menu.component';
import { CarrinhoComponent } from './detalhe-restaurante/carrinho/carrinho.component';
import { ItemMenuComponent } from './detalhe-restaurante/item-menu/item-menu.component';
import { ReviewsComponent } from './detalhe-restaurante/reviews/reviews.component';
import { CarrinhoService } from './detalhe-restaurante/carrinho/carrinho.service';
import { PedidoComponent } from './pedido/pedido.component';
import { ItensDePedidoComponent } from './pedido/itens-de-pedido/itens-de-pedido.component';
import { CustosComponent } from './pedido/custos/custos.component';
import { PedidoSumarioComponent } from './pedido-sumario/pedido-sumario.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantesComponent,
    RestauranteComponent,
    DetalheRestauranteComponent,
    MenuComponent,
    CarrinhoComponent,
    ItemMenuComponent,
    ReviewsComponent,
    PedidoComponent,
    ItensDePedidoComponent,
    CustosComponent,
    PedidoSumarioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestauranteService,
    CarrinhoService,
    PedidoService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
