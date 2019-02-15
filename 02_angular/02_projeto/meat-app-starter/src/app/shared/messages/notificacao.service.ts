import { EventEmitter } from '@angular/core';

export class NotificacaoService {

  notificador = new EventEmitter<any>();

  constructor() { }

  notificar(mensagem: string) {
    this.notificador.emit(mensagem);
  }
}
