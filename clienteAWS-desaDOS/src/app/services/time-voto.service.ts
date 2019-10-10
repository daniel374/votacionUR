import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configs } from '../lib/config';
import { habilvoto } from '../interfaces/bodyLbWs';

@Injectable({
  providedIn: 'root'
})
export class TimeVotoService {

  data_est = Configs.url+'/webadmin/utils/ontimevoting';
  constructor(private http: HttpClient) { }

  habilVoto() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log("headers:");
    console.log(headers);
    return this.http.post<habilvoto>(this.data_est, {headers: headers});
  }
}
