import { Component, OnInit } from '@angular/core';
import { RepresentantesService } from '../../services/representantes.service';
import { DatosComponentService } from '../../services/datos-component.service';
import { Router, ActivatedRoute } from '@angular/router';
import { representante } from 'src/app/interfaces/bodyLbWs';
import { FormControl, FormGroup} from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-representantes-consejo',
  templateUrl: './representantes-consejo.component.html',
  styleUrls: ['./representantes-consejo.component.css']
})
export class RepresentantesConsejoComponent implements OnInit {
  
  selected: any;
  public valuId: number = 0;
  public ponerX: any = [];

  vcId: any;
  vfSemestre: any;
  codPlan: any;

  /* data formula */
  public nomFormula: any;
  public forPresiFoto: any;
  public nomforPresi: any;
  public forVipreFoto: any;
  public nomforVipre: any;
  public dataFormula: any;
  /* data Representante */
  public dataRepre: any = [];

  representantes: any = [];
  repConsejo: string;

  public isButtonVisible: boolean;
  constructor(
    private representantesService: RepresentantesService, 
    private router: Router, 
    private route: ActivatedRoute,
    private datosComponentService: DatosComponentService,
    private config: NgSelectConfig
  ) {  }

  ngOnInit() {    
    //console.log("datos res WS "+this.datosComponentService.resDatos);
    this.infoRepre();
  }

  

  infoRepre(){
    
      //this.dataFormula = this.datosComponentService.resDatos[2];//JSON.stringify(p);
      // console.log("data formula  "+this.dataFormula);
      this.vcId = this.datosComponentService.resDatos[0] || 0;
      this.codPlan = this.datosComponentService.resDatos[2];
      this.vfSemestre = String(this.datosComponentService.resDatos[3]);

	  
      if(this.vcId){
		  
		if (this.vcId > 4 && this.vcId < 9 ) {
            var arrayCodPlan = this.codPlan.split(/([a-zA-Z]+)/);// colocar -
            console.log('cod plan' + arrayCodPlan);
            this.codPlan = arrayCodPlan[1];
            

          } else {
            this.codPlan = '';			
          }
		  
        /* 
        console.log('plan ' + this.codPlan );
        console.log('semestre ' + this.vfSemestre);
         */
        this.representantesService.representConse(this.vcId, this.vfSemestre, this.codPlan).subscribe(
          res => {
            /* console.log("status del servicio: "+JSON.stringify(res.success));
            console.log("data representantes servicio: "+JSON.stringify(res.data)); */
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

  continuar(repre: representante){
    this.isButtonVisible = true;
    
    // muestra img X
	  this.valuId = repre.VrepId;
    
    //data repre para envio
    this.dataRepre = [
      repre.VrepFoto,
      repre.VrepNombre,
      repre.VrepSemestre,
      repre.VplNombre,
      repre.VrepId
    ]

    this.datosComponentService.guarDatosRepre(this.dataRepre, this.vcId);
    console.log('Id consejo ' + this.vcId);
  }


  /* medicina */
  conti2Repre(repre: representante){
    this.ponerX = this.ponerX.filter(function(element, index, array) {
		return (element != null);  
	});
    // muestra img X
    if (this.ponerX.length < 2 ) {
	  	
      this.ponerX = this.ponerX.concat(repre.VrepId);
 
      this.dataRepre = this.dataRepre.concat([
        {
          "VrepFoto": `${repre.VrepFoto}`,
          "VrepNombre": `${repre.VrepNombre}`,
          "VrepSemestre": `${repre.VrepSemestre}`,
          "VplNombre": `${repre.VplNombre}`,
          "VrepId": `${repre.VrepId}`,
        }
      ]        
      );
	} else {
      this.dataRepre.reverse();
      this.ponerX.reverse();
      this.dataRepre.splice(1, 1, {
        "VrepFoto": `${repre.VrepFoto}`,
        "VrepNombre": `${repre.VrepNombre}`,
        "VrepSemestre": `${repre.VrepSemestre}`,
        "VplNombre": `${repre.VplNombre}`,
        "VrepId": `${repre.VrepId}`,
      }
      );
      this.ponerX.splice(1,1,repre.VrepId);
	  
    }
	
	if (this.ponerX.length == 2) {
	  this.isButtonVisible = true;
	}
	
    console.log('ponerx ' + JSON.stringify(this.ponerX));
    

    console.log('dataRepre ' + JSON.stringify(this.dataRepre));
    console.log('Id consejo ' + this.vcId);
    

  }

  regisVoto(){
	  this.isButtonVisible = false;
	  this.datosComponentService.guarDatosRepre(this.dataRepre, this.vcId);
  }

}
