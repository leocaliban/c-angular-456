import { Estudante } from './estudante.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apg-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {

  // @Input() nome: string;
  // @Input() isMatriculado: boolean;

  @Input() estudante: Estudante;

  constructor() { }

  ngOnInit() {
  }

}
