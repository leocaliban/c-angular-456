import { Router, NavigationEnd } from '@angular/router';
import { MEAT_API } from './../../app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class LoginService {

  user: User;
  ultimaURL: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.router.events.filter(event =>
      event instanceof NavigationEnd)
      .subscribe((ultimaURL: NavigationEnd) => this.ultimaURL = ultimaURL.url);
  }

  isLogged(): boolean {
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}login`,
      { email: email, password: password })
      .do(user => this.user = user);
  }

  logout() {
    this.user = undefined;
  }

  handleLogin(path: string = this.ultimaURL) {
    this.router.navigate(['/login', btoa(path)]);
  }
}
