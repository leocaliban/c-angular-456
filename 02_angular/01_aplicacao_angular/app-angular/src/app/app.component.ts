import { Estudante } from './estudante/estudante.model';
import { Component } from '@angular/core';

@Component({
  selector: 'apg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  estudantes: Estudante[] = [
    {
      nome: 'Jack',
      isMatriculado: true
    },
    {
      nome: 'Kim',
      isMatriculado: false
    },
    {
      nome: 'Nina',
      isMatriculado: true,
      idade: 40
    }
  ];


}
