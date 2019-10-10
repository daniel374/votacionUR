import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configs } from '../lib/config';
import { ResWsEstud } from '../interfaces/ResWsEstud';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  project: string = "casaur";
  enviroment: string = "dev";
  //data_Est = `https://serveless.proximateapps-services.com.mx/${this.project}/${this.enviroment}/webadmin/utils/postsoapgeneric`;
  data_Est = Configs.url+'/webadmin/utils/postsoapgeneric';
  constructor(private http: HttpClient) {
    
   }

  dataEstudiante(){
    
    let meTokens = localStorage.getItem('meToken');
    if (meTokens === ''){

    }
    /* console.log("meToken es  "+meTokens); */
    
    var newToken = meTokens.replace(/['"]+/g, '');
    /* console.log("token new "+newToken); */
    localStorage.setItem('newToken',newToken);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': newToken
    });
    var numDocEstu = localStorage.getItem('numDoc');
    let xmlBody = { "body": `<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:wss=\"http://wsservicios.urosario.edu.co\"><soapenv:Header/><soapenv:Body><wss:getProgramas><wss:identification>${numDocEstu}</wss:identification></wss:getProgramas></soapenv:Body></soapenv:Envelope>`};
    /* console.log(JSON.stringify(xmlBody)); */
    return this.http.post<ResWsEstud>(this.data_Est, xmlBody, {headers: headers});
    
  }
}
