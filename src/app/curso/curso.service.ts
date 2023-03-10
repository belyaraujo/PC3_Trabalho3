import { Curso } from './models/curso.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',

})
export class CursoService {
  private API = 'http://localhost:8080/api/v1/cursos';

  constructor(private httpClient: HttpClient) { }

  save(curso: Curso): Observable<Curso> {
    return this.httpClient.post<Curso>(this.API, curso);
  }

}
