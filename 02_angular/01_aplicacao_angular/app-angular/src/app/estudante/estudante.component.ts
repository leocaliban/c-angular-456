import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apg-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {

  nome = 'Jack';
  isMatriculado = false;

  constructor() { }

  ngOnInit() {
  }

}
