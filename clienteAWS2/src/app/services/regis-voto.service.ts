import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResWsBD } from '../interfaces/ResWsBD';

@Injectable({
  providedIn: 'root'
})
export class RegisVotoService {

  /* Servicos AWS */
  project: string = "casaur";
  enviroment: string = "dev";
  Data_Est = `https://serveless.proximateapps-services.com.mx/${this.project}/${this.enviroment}/webadmin/generic/store`;

  constructor(private http: HttpClient) { }

  regisVoto(numUser: any, formu: any, repre: any){
    
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
      "key" : "guardarVoto",
      "parameters" : [
        `${numUser}`,
        1,
        `${formu}`,
        `${repre}`
      ]};
    console.log("body service Registrar voto: ");
    
    console.log(JSON.stringify(xmlBody));
    return this.http.post<ResWsBD>(this.Data_Est, xmlBody, {headers: headers});
    
  }
}
