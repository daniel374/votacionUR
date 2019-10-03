import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosComponentService {

  public resDatos: any = [];
  public msjSpinner: any = 'Cargando...';
  constructor() { }

  cambiaSpinner(msj: any){
    this.msjSpinner = msj;
    return this.msjSpinner;
  }

  mensajeSpinner(){
    //this.msjSpinner = mensaje;
    return this.msjSpinner;
  }
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
