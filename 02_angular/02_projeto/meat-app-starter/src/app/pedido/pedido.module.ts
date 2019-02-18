import { SairTelaPedidoGuard } from 'app/pedido/sair-tela-pedido.guard';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PedidoComponent } from './pedido.component';
import { ItensDePedidoComponent } from './itens-de-pedido/itens-de-pedido.component';
import { CustosComponent } from './custos/custos.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: PedidoComponent,
    canDeactivate: [SairTelaPedidoGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    PedidoComponent,
    ItensDePedidoComponent,
    CustosComponent
  ]
})
export class PedidoModule { }
