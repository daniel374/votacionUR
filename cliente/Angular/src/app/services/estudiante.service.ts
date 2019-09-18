import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResWsEstud } from '../interfaces/ResWsEstud';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  project: string = "casaur";
  enviroment: string = "dev";
  Data_Est = `https://serveless.proximateapps-services.com.mx/${this.project}/${this.enviroment}/webadmin/utils/postsoapgeneric`;

  constructor(private http: HttpClient) {
    
   }

  dataEstudiante(){
    
    let meTokens = localStorage.getItem('meToken');
    if (meTokens === ''){

    }
    console.log("meToken es  "+meTokens);
    
    var newToken = meTokens.replace(/['"]+/g, '');
    console.log("token new "+newToken);
    localStorage.setItem('newToken',newToken);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': newToken
    });
    console.log("headers:");
    console.log(headers);
    const cedulaEst = 1010202013;
    let xmlBody = { "body": `<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:wss=\"http://wsservicios.urosario.edu.co\"><soapenv:Header/><soapenv:Body><wss:getProgramas><wss:identification>${cedulaEst}</wss:identification></wss:getProgramas></soapenv:Body></soapenv:Envelope>`};
    console.log(JSON.stringify(xmlBody));
    return this.http.post<ResWsEstud>(this.Data_Est, xmlBody, {headers: headers});
    
  }
}
