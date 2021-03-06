import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormulasService {

  constructor(private http: HttpClient) { }

  API_URI = 'http://localhost:3000/api/votaciones/Consejos/formulas/';

  getFormulas() {
    return this.http.get(`${this.API_URI}`);
  }

  getFormulasConse(id: number) {
    return this.http.get(`${this.API_URI}${id}`);
  }
  
}






  

