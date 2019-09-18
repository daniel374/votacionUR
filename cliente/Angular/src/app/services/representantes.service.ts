import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepresentantesService {

  constructor(private http: HttpClient) { }

  API_URI = 'http://localhost:3000/api/votaciones/Consejos/Representantes/';

  getRepresentantes() {
    return this.http.get(`${this.API_URI}`);
  }
  
  getRepresentConse(id: number) {
    return this.http.get(`${this.API_URI}${id}`);
  }

}


