import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { DetalheRestauranteComponent } from './detalhe-restaurante/detalhe-restaurante.component';
import { MenuComponent } from './detalhe-restaurante/menu/menu.component';
import { CarrinhoComponent } from './detalhe-restaurante/carrinho/carrinho.component';
import { ItemMenuComponent } from './detalhe-restaurante/item-menu/item-menu.component';
import { ReviewsComponent } from './detalhe-restaurante/reviews/reviews.component';
import { PedidoSumarioComponent } from './pedido-sumario/pedido-sumario.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
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
    PedidoSumarioComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
