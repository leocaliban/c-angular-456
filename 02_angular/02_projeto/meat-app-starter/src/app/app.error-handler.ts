import { LoginService } from './security/login/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { NotificacaoService } from './shared/messages/notificacao.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

  constructor(
    private notificacaoService: NotificacaoService,
    private injector: Injector,
    private zone: NgZone
  ) {
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any) {
    if (errorResponse instanceof HttpErrorResponse) {
      const mensagem = errorResponse.error.message;
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 401:
            this.injector.get(LoginService).handleLogin();
            break;
          case 403:
            this.notificacaoService.notificar(mensagem || 'Não autorizado.');
            break;
          case 404:
            this.notificacaoService.notificar(mensagem || 'Recurso não encontrado.');
            break;
          default:
            this.notificacaoService.notificar('Desculpe. Ocorreu um erro inesperado!');
            break;
        }
      })
    }
    super.handleError(errorResponse);
  }
}
