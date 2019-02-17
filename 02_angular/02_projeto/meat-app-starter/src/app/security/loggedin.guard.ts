import { LoginService } from './login/login.service';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedInGuard implements CanLoad {

  constructor(private loginService: LoginService) { }

  canLoad(route: Route): boolean {
    const loggedIn = this.loginService.isLogged();
    if (!loggedIn) {
      this.loginService.handleLogin();
    }
    return loggedIn;
  }

}
