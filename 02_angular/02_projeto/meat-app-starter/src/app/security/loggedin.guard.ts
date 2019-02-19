import { LoginService } from './login/login.service';
import { CanLoad, Route, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(private loginService: LoginService) { }

  canLoad(route: Route): boolean {
    return this.checkAuthentication(route.path);
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    return this.checkAuthentication(activatedRoute.routeConfig.path);
  }


  checkAuthentication(path: string): boolean {
    const loggedIn = this.loginService.isLogged();
    if (!loggedIn) {
      this.loginService.handleLogin(`/${path}`);
    }
    return loggedIn;
  }

}
