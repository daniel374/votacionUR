import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosComponentService {

  public resDatos: any = [];
  public resDatosRepre: any = [];
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
    this.resDatos[0] = datosConsejo[0];
    this.resDatos[1] = datosConsejo[1];
    this.resDatos[2] = datosConsejo[2];
    this.resDatos[3] = datosConsejo[3];
    //console.log("res datos "+this.resDatos);
    return this.resDatos;
  }

  guarDatosFormula(datosFormula: any){
    this.resDatos[4] = datosFormula[0];
    this.resDatos[5] = datosFormula[1];
    this.resDatos[6] = datosFormula[2];
    this.resDatos[7] = datosFormula[3];
    this.resDatos[8] = datosFormula[4];
    this.resDatos[9] = datosFormula[5];
    //this.resDatos[4] = this.resDatos.concat(datosFormula[4]);
    //console.log("res datos "+this.resDatos);
    return this.resDatos;
  }

  guarDatosRepre(datosRepresen: any, vcId: any){
    if (vcId != 10 ){
      this.resDatos[10] = datosRepresen[0];
      this.resDatos[11] = datosRepresen[1];
      this.resDatos[12] = datosRepresen[2];
      this.resDatos[13] = datosRepresen[3];
      this.resDatos[14] = datosRepresen[4];
    } else {
      this.resDatosRepre = datosRepresen;
      this.resDatos = this.resDatos.concat(this.resDatosRepre);
      
    }

    //this.resDatos = this.resDatos.concat(datosRepresen);
    console.log("res datos "+this.resDatos);
    return this.resDatos;
  }

  borrarData(arraDrop: any){
    //this.resDatos = [];
    this.resDatos.splice(10,1);
    this.resDatos.splice(11,1);
  }
}