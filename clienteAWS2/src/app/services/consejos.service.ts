import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResWsBD } from '../interfaces/ResWsBD';
import { bodyLbWs } from '../interfaces/bodyLbWs';

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

	    
      let arrPlanes = JSON.parse(infoPlanes);
      /* console.log('arrPlanes' + arrPlanes);
      console.log(typeof(arrPlanes)); */
      let xmlBody: bodyLbWs;
      xmlBody = {
          VresTipoDocumento: tpDoc,
          VresNumDocumento: `${numDoc}`,
          VesNombre: esNom,
          VesEmail: email,
          infoPlanes: arrPlanes,
      }
      let xmlBody2 = JSON.stringify(xmlBody);
      
        
    
      console.log('body service Lambda: ');
      console.log(xmlBody);
      console.log(xmlBody2);
      return this.http.post<ResWsBD>(this.Data_Est, xmlBody2, {headers: headers});
      
    }

}