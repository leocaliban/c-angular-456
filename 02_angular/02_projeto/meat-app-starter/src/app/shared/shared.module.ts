import { NotificacaoService } from './messages/notificacao.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { CarrinhoService } from 'app/detalhe-restaurante/carrinho/carrinho.service';
import { PedidoService } from 'app/pedido/pedido.service';
import { RestauranteService } from 'app/restaurantes/restaurantes.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { LoginService } from 'app/security/login/login.service';
import { LoggedInGuard } from 'app/security/loggedin.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RadioComponent,
    InputComponent,
    AvaliacaoComponent,
    SnackbarComponent
  ],
  exports: [
    RadioComponent,
    InputComponent,
    AvaliacaoComponent,
    SnackbarComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        CarrinhoService,
        PedidoService,
        RestauranteService,
        NotificacaoService,
        LoginService,
        LoggedInGuard
      ]
    };
  }
}
