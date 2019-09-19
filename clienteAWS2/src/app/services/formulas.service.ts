import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResWsBD } from '../interfaces/ResWsBD';

@Injectable({
  providedIn: 'root'
})
export class FormulasService {

  /* Servicios Backend Node.js */
  API_URI = 'http://localhost:3000/api/votaciones/Consejos/formulas/';

  /* Servicos AWS */
  project: string = "casaur";
  enviroment: string = "dev";
  Data_Est = `https://serveless.proximateapps-services.com.mx/${this.project}/${this.enviroment}/webadmin/generic/gettable`;
  

  constructor(private http: HttpClient) { }
  /* Servicios Backend Node.js */

  getFormulas() {
    return this.http.get(`${this.API_URI}`);
  }

  getFormulasConse(id: number) {
    return this.http.get(`${this.API_URI}${id}`);
  }
  /* Servicos AWS */
  formulasConse(vcId: any){
    
    let newToken = localStorage.getItem('newToken');
    console.log("token new "+newToken);
    if (newToken === ''){

    }
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': newToken
    });
    console.log("headers:");
    console.log(headers);
    
    let xmlBody = { 
      "fields" : "*",
      "table" : "vot_formula_consejo",
      "joins" : [
        {
          "table" : "vot_consejo",
          "on" : "vot_formula_consejo.VfConsejo = vot_consejo.VcId",
          "type" : "left"
        }
      ],
      "wheres" : [
        {
          "type" : "where",
          "conditions" : {"VfConsejo" : `${vcId}`}
        }
      ]};
    console.log("body serviceFormula: ");
    
    console.log(JSON.stringify(xmlBody));
    return this.http.post<ResWsBD>(this.Data_Est, xmlBody, {headers: headers});
    
  }

}






  

