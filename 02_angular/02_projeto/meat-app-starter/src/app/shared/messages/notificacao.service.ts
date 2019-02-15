import { EventEmitter } from '@angular/core';

export class NotificacaoService {

  notificador = new EventEmitter<string>();

  constructor() { }

  notificar(mensagem: string) {
    this.notificador.emit(mensagem);
  }
}
