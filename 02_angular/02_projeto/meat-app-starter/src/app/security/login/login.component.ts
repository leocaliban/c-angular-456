import { ActivatedRoute, Router } from '@angular/router';
import { NotificacaoService } from './../../shared/messages/notificacao.service';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  formularioDeLogin: FormGroup;
  navigateTo: string;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private notificacaoService: NotificacaoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');

    this.formularioDeLogin = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required])
    });
  }

  login() {
    let email: string = this.formularioDeLogin.value.email;
    let password: string = this.formularioDeLogin.value.password;

    this.loginService.login(email, password)
      .subscribe(userResponse =>
        this.notificacaoService.notificar(`Bem vindo, ${userResponse.name}`),
        response => // HTTPErrorResponse
          this.notificacaoService.notificar(response.error.message),
        () => {
          this.router.navigate([ atob(this.navigateTo)]);
        });
  }

}
