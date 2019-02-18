import { User } from './../../security/login/user.model';
import { LoginService } from 'app/security/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  usuario(): User {
    return this.loginService.user;
  }

  isLogged(): boolean {
    return this.loginService.isLogged();
  }

  login() {
    this.loginService.handleLogin();
  }

  logout() {
    this.loginService.logout();
  }
}
