import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosComponentService {

  public resDatos: any = [];
  
  constructor() { }

  guarDatosConsejo(datosConsejo: any){
    this.resDatos = datosConsejo;
    //console.log("res datos "+this.resDatos);
    return this.resDatos;
  }

  guarDatosFormula(datosFormula: any){
    this.resDatos = this.resDatos.concat(datosFormula);
    //console.log("res datos "+this.resDatos);
    return this.resDatos;
  }

  guarDatosRepre(datosRepresen: any){
    this.resDatos = this.resDatos.concat(datosRepresen);
    console.log("res datos "+this.resDatos);
    return this.resDatos;
  }

}
