import { PedidoComponent } from './pedido.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';

@Injectable()
export class SairTelaPedidoGuard implements CanDeactivate<PedidoComponent> {

  canDeactivate(pedidoComponent: PedidoComponent): boolean {
    if (!pedidoComponent.isPedidoCompleto()) {
      return window.confirm('Deseja desistir da compra?');
    } else {
      return true;
    }
  }

}
