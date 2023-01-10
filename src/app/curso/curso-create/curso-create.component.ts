import { Component } from "@angular/core";
import { CursoService } from "../curso.service";
import { Curso } from "../models/curso.model";
import { Modalidade } from "../models/modalidade.model";

@Component({
  selector: 'gc-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.css']
})
export class CursoCreateComponent {
  nome!: string;
  cargaHoraria!: number;
  modalidade!: Modalidade;

  modalidades = [
    { modalidade: Modalidade.PRESENCIAL, descricao: 'Presencial' },
    { modalidade: Modalidade.EAD, descricao: 'Ensino a Distância' },
    { modalidade: Modalidade.SEMI_PRESENCIAL, descricao: 'Semi presencial' }
  ];
  constructor(private cursoServive: CursoService) { }

  onChange(novoValorModalidade: Modalidade) {
    this.modalidade = novoValorModalidade;
  }

  save() {
    const curso: Curso = {
      nome: this.nome, cargaHoraria:
        this.cargaHoraria, modalidade: this.modalidade
    };
    this.cursoServive.save(curso).subscribe((res) => {
      console.log(res);
    },
      error => console.log(error));
  }
}
