import { Component, OnInit } from '@angular/core';
import { RepresentantesService } from '../../services/representantes.service';
import { DatosComponentService } from '../../services/datos-component.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-representantes-consejo',
  templateUrl: './representantes-consejo.component.html',
  styleUrls: ['./representantes-consejo.component.css']
})
export class RepresentantesConsejoComponent implements OnInit {

  public valuId: number = 0;
  vcId: any;
  /* data formula */
  public nomFormula: any;
  public forPresiFoto: any;
  public nomforPresi: any;
  public forVipreFoto: any;
  public nomforVipre: any;
  public dataFormula: any;
  /* data Representante */
  dataRepre: any;

  representantes: any = [];
  repConsejo: string;

  public isButtonVisible: boolean;
  constructor(
    private representantesService: RepresentantesService, 
    private router: Router, 
    private route: ActivatedRoute,
    private datosComponentService: DatosComponentService
  ) { }

  ngOnInit() {
    /* trae los representantes del consejo */
    
    //console.log("datos res WS "+this.datosComponentService.resDatos);

    this.infoRepre();
  }

  infoRepre(){
    
      this.dataFormula = this.datosComponentService.resDatos[2];//JSON.stringify(p);
      console.log("data formula  "+this.dataFormula);
      this.vcId = this.datosComponentService.resDatos[0] || 0;
      this.nomFormula = this.datosComponentService.resDatos[2];
      this.forPresiFoto = this.datosComponentService.resDatos[3];
      this.nomforPresi = this.datosComponentService.resDatos[4];
      this.forVipreFoto = this.datosComponentService.resDatos[5];
      this.nomforVipre = this.datosComponentService.resDatos[6];
      if(this.vcId !=0){
        //console.log(this.vcId);

        /* console.log("nombre formula  "+this.nomFormula);
        console.log("foto presidente  "+this.forPresiFoto);
        console.log("nombre presidente  "+this.nomforPresi);
        console.log("foto vicepresidente  "+this.forVipreFoto);
        console.log("nombre vicepresidente  "+this.nomforVipre); */
        this.representantesService.representConse(this.vcId).subscribe(
          res => {
            console.log("status del servicio: "+JSON.stringify(res.success));
            console.log("data representantes servicio: "+JSON.stringify(res.data));
            this.representantes = res.data;
            console.log("representantes "+this.representantes)            
            if(this.representantes!=''){
              this.repConsejo = res.data[0]['VplNombre'];
              console.log("repConsejo "+this.repConsejo);
            }else{
              this.repConsejo = this.datosComponentService.resDatos[1];
              console.log(this.repConsejo);
            }
          },
          err => console.error(err)
          );
        }
     
  }

  continuar(repreFoto: string,nomRepre: string,semestRepre: string,planRepre: string,valId: number){
    this.isButtonVisible = true;
	  
	this.valuId = valId;
	console.log(' id represen ' + valId);
	console.log(' id value ' + this.valuId);
    //data repre para envio
    this.dataRepre = [
      repreFoto,
      nomRepre,
      semestRepre,
      planRepre,
    ]

    this.datosComponentService.guarDatosRepre(this.dataRepre);

  }

  iraRepresent(votacion: string){

  }

}
