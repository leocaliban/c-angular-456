import { Estudante } from './estudante/estudante.model';
import { Component } from '@angular/core';

@Component({
  selector: 'apg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  jack: Estudante = {
    nome: 'Jack',
    isMatriculado: true
  };
  kim: Estudante = {
    nome: 'Kim',
    isMatriculado: false
  };
  nina: Estudante = {
    nome: 'Nina',
    isMatriculado: true,
    idade: 40
  };
}
