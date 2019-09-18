import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-resumen-voto',
  templateUrl: './resumen-voto.component.html',
  styleUrls: ['./resumen-voto.component.css']
})
export class ResumenVotoComponent implements OnInit {

  /* variables data formula */
  public datosFormula: any;//array con data
  public nomFormula: any;
  public forPresiFoto: any;
  public nomforPresi: any;
  public forVipreFoto: any;
  public nomforVipre: any;
  
  /* variables data Representante */
  public repreFoto: any;
  public nomRepre: any;
  public semestRepre: any;
  public planRepre: any;
  /*  */
  public datosRepre: any;


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((p: ParamMap) => {
      console.log("data p  "+JSON.stringify(p));
      
      this.datosFormula = p['datosFormu'];//JSON.stringify(p);
      console.log("data formula  "+this.datosFormula);
      
      this.nomFormula = this.datosFormula[0];
      this.forPresiFoto = this.datosFormula[1];
      this.nomforPresi = this.datosFormula[2];
      this.forVipreFoto = this.datosFormula[3];
      this.nomforVipre = this.datosFormula[4];
      

      console.log("nombre formula  "+this.nomFormula);
      console.log("foto presidente  "+this.forPresiFoto);
      console.log("nombre presidente  "+this.nomforPresi);
      console.log("foto vicepresidente  "+this.forVipreFoto);
      console.log("nombre vicepresidente  "+this.nomforVipre);
        
        /* datos Representante */
      this.datosRepre = p['datosRepre'];
      console.log("datos Representante  "+this.datosRepre);

      this.repreFoto = this.datosRepre[0];
      this.nomRepre = this.datosRepre[1];
      this.semestRepre = this.datosRepre[2];
      this.planRepre = this.datosRepre[3];
        
      console.log("foto representante  "+this.repreFoto);
      console.log("nombre representante  "+this.nomRepre);
      console.log("semestre  "+this.semestRepre);
      console.log("plan  "+this.planRepre);
          
    });
  }

  votar(){
    
  }

  borrar(votacion: string){

  }

}
