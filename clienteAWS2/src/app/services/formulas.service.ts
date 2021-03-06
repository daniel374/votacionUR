import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResWsBD } from '../interfaces/ResWsBD';

@Injectable({
  providedIn: 'root'
})
export class FormulasService {

  /* Servicos AWS */
  xmlBody: any;
  project: string = "casaur";
  enviroment: string = "dev";
  Data_Est = `https://serveless.proximateapps-services.com.mx/${this.project}/${this.enviroment}/webadmin/generic/gettable`;
  

  constructor(private http: HttpClient) { }

  /* Servicos AWS */
  formulasConse(vcId: any,vfSemestre: any, codPlan: any){
    
    let newToken = localStorage.getItem('newToken');
    console.log("token new "+newToken);
    if (newToken === ''){

    }

    if (vfSemestre != '' && codPlan == '') {
      this.xmlBody = { 
        "fields" : "*",
        "table" : "vot_formula_consejo",
        "wheres" : [
          {
            "type" : "where",
            "conditions" : {"VfSemestre" : null}
          },
          {
            "type" : "where",
            "conditions" : {"VfPlanCode" : null}
          },
          {
              "type" : "where",
              "conditions" : {"VfConsejo" : `${vcId}`}
          },
          { 
            "type": "whereOR", 
            "key": "VfSemestre", 
            "value": `${vfSemestre}`
          },
          {
            "type" : "where",
            "conditions" : {"VfConsejo" : `${vcId}`}
          }
        ]};
    } else if (codPlan != '' && vfSemestre == '') {
      this.xmlBody = { 
        "fields" : "*",
        "table" : "vot_formula_consejo",
        "wheres" : [
          {
            "type" : "where",
            "conditions" : {"VfSemestre" : null}
          },
          {
            "type" : "where",
            "conditions" : {"VfPlanCode" : null}
          },
          {
              "type" : "where",
              "conditions" : {"VfConsejo" : `${vcId}`}
          },
          { 
            "type": "whereOR", 
            "key": "VfPlanCode", 
            "value": `${codPlan}`
          },
          {
            "type" : "where",
            "conditions" : {"VfConsejo" : `${vcId}`}
          }
        ]};
    } else {
      this.xmlBody = { 
        "fields" : "*",
        "table" : "vot_formula_consejo",
        "wheres" : [
          {
              "type" : "where",
              "conditions" : {"VfConsejo" : `${vcId}`}
          }
        ]};
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': newToken
    });
    console.log("headers:");
    console.log(headers);
    

    console.log("body serviceFormula: ");
    
    console.log(JSON.stringify(this.xmlBody));
    return this.http.post<ResWsBD>(this.Data_Est, this.xmlBody, {headers: headers});
    
  }

}







  

