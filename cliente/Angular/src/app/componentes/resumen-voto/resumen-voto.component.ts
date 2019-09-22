import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatosComponentService } from '../../services/datos-component.service';

@Component({
  selector: 'app-resumen-voto',
  templateUrl: './resumen-voto.component.html',
  styleUrls: ['./resumen-voto.component.css']
})
export class ResumenVotoComponent implements OnInit {

  vcId: any;

  /* data formu y repre */
  public dataForRepre: any;
  /* variables data formula */
  //public datosFormula: any;//array con data formula
  public nomFormula: any;
  public forPresiFoto: any;
  public nomforPresi: any;
  public forVipreFoto: any;
  public nomforVipre: any;
  
  /* variables data Representante */
  /* **************************** */
  
  //public datosRepre: any;
  public repreFoto: any;
  public nomRepre: any;
  public semestRepre: any;
  public planRepre: any;
  /*  */
  


  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private datosComponentService: DatosComponentService
  ) { }

  ngOnInit() {

    console.log("datos res WS "+this.datosComponentService.resDatos);
    this.resumenVoto();
  }

  resumenVoto(){
    this.dataForRepre = this.datosComponentService.resDatos;
      console.log("data formula y repre  "+this.dataForRepre);
      
    this.vcId = this.dataForRepre[0] || 0;
    this.nomFormula = this.dataForRepre[2];
    this.forPresiFoto = this.dataForRepre[3];
    this.nomforPresi = this.dataForRepre[4];
    this.forVipreFoto = this.dataForRepre[5];
    this.nomforVipre = this.dataForRepre[6];
      

    console.log("nombre formula  "+this.nomFormula);
    console.log("foto presidente  "+this.forPresiFoto);
    console.log("nombre presidente  "+this.nomforPresi);
    console.log("foto vicepresidente  "+this.forVipreFoto);
    console.log("nombre vicepresidente  "+this.nomforVipre);
        
      /* datos Representante */
/*     this.datosRepre = 
    console.log("datos Representante  "+this.datosRepre); */

    this.repreFoto = this.dataForRepre[7];
    this.nomRepre = this.dataForRepre[8];
    this.semestRepre = this.dataForRepre[9];
    this.planRepre = this.dataForRepre[10];
        
    /* console.log("foto representante  "+this.repreFoto);
    console.log("nombre representante  "+this.nomRepre);
    console.log("semestre  "+this.semestRepre);
    console.log("index plan  "+this.datosFormula.indexOf("SOCIOLOGÍA")); */
  }

  votar(){
  // disparar servicio votacion store  
  }

  borrar(votacion: string){

  }

}
