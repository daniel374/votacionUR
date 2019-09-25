import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResWsBD } from '../interfaces/ResWsBD';

@Injectable({
  providedIn: 'root'
})
export class ConsejosService {

  /* Servicos AWS */
  project: string = "casaur";
  enviroment: string = "dev";
  Data_Est = `https://serveless.proximateapps-services.com.mx/${this.project}/${this.enviroment}/webadmin/voting/savestudent`;

  constructor(private http: HttpClient) { }

    /* Servicos AWS */
    getConsejos(tpDoc: number, numDoc: any, esNom: any, email: any, infoPlanes: any){
    
      let newToken = localStorage.getItem('newToken');
      console.log('token new ' + newToken);
      if (newToken === ''){
  
      }
      
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': newToken
      });
      console.log('headers:');
      console.log(headers);

	  console.log('el tipo id  ' + tpDoc);
      console.log(typeof(tpDoc));
      let xmlBody = new Object();
	  xmlBody.VresTipoDocumento = tpDoc;
	  xmlBody.VresNumDocumento = `${numDoc}`;
	  xmlBody.VesNombre = esNom;
	  xmlBody.VesEmail = email;
	  xmlBody.infoPlanes = infoPlanes;
        
    
      console.log('body service Lambda: ');
      console.log(xmlBody);
      console.log(JSON.stringify(xmlBody));
      return this.http.post<ResWsBD>(this.Data_Est, xmlBody, {headers: headers});
      
    }

}