import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResWsBD } from '../interfaces/ResWsBD';

@Injectable({
  providedIn: 'root'
})
export class RepresentantesService {
  /* Servicios Backend Node.js */
  API_URI = 'http://localhost:3000/api/votaciones/Consejos/Representantes/';

  /* Servicos AWS */
  project: string = "casaur";
  enviroment: string = "dev";
  Data_Est = `https://serveless.proximateapps-services.com.mx/${this.project}/${this.enviroment}/webadmin/generic/gettable`;

  constructor(private http: HttpClient) { }
  
  /* Servicios Backend Node.js */
  getRepresentantes() {
    return this.http.get(`${this.API_URI}`);
  }
  
  getRepresentConse(id: number) {
    return this.http.get(`${this.API_URI}${id}`);
  }

  /* service AWS */
  representConse(vcId: any){
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
      "table" : "vot_representantes",
      "joins" : [
        {
          "table" : "vot_plan",
          "on" : "vot_representantes.VrepPlan = vot_plan.VplId",
          "type" : "left"
        }
      ],
      "wheres" : [
        {
          "type" : "where",
          "conditions" : {"VplConsejo" : `${vcId}`}
        }
      ]
    };
    console.log("body serviceRepresentantes: ");
    
    console.log(JSON.stringify(xmlBody));
    return this.http.post<ResWsBD>(this.Data_Est, xmlBody, {headers: headers});
  }

}


