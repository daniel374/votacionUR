import { Component, OnInit } from '@angular/core';
import { FormulasService } from '../../services/formulas.service';
import { DatosComponentService } from '../../services/datos-component.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-formulas-consejo',
  templateUrl: './formulas-consejo.component.html',
  styleUrls: ['./formulas-consejo.component.css']
})
export class FormulasConsejoComponent implements OnInit {

  
  public valuId: number = 0;
  dataFormu: any;
  noFormu:any;
  /*  */
  vcId: any;
  codPlan: any;
  infoPlanes: any = [];
  vfSemestre: any;
  noConsejo: any;
  formulas: any = [];
  forConsejo: string;
  
  public isButtonVisible: boolean;

  constructor(
    private formulasService: FormulasService,
    private router: Router,
    private route: ActivatedRoute,
    private datosComponentService: DatosComponentService
  ) { }

  ngOnInit() {
    /* trae data consejo */
    
    console.log("datos res WS "+this.datosComponentService.resDatos);
    /*  */
    this.infoformulas();
  }

  infoformulas(){
    
      this.vcId = this.datosComponentService.resDatos[0] || 0;
      this.codPlan = this.datosComponentService.resDatos[2];

      this.noConsejo = String(this.datosComponentService.resDatos[1]);
      this.vfSemestre = String(this.datosComponentService.resDatos[3]);

      if (this.vcId){
          if (this.vcId == 8) {
            this.vfSemestre > 4 ? this.vfSemestre == '' : this.vfSemestre;
            var arrayCodPlan = this.codPlan.split(/([a-zA-Z]+)/);
            // console.log('cod plan' + arrayCodPlan);
            this.codPlan = arrayCodPlan[1];
            // console.log('cod plan' + arrayCodPlan[1]);
          } else if (this.vcId == 9) {
            this.vfSemestre = this.vfSemestre;
            this.codPlan = '';
          } else if (this.vcId == 10) {
            this.vfSemestre = this.vfSemestre;
            this.codPlan = '';
          } else {
            this.vfSemestre = '';
            this.codPlan = '';
          }
          
          // console.log('semestre ' + this.vfSemestre);
		  this.formulasService.formulasConse(this.vcId, this.vfSemestre, this.codPlan).subscribe(
          res=>{
            /* console.log("status del servicio: "+JSON.stringify(res.success));
            console.log("data formulas consejo servicio: "+JSON.stringify(res.data)); */
            this.formulas = res.data;
            if(this.formulas!=''){
              this.forConsejo = res.data[0]['VcNombre'];
              /* console.log("forconsejo "+this.forConsejo);
              console.log(res); */
            }else{
              this.forConsejo = this.noConsejo;
              /* console.log(this.forConsejo);
              console.log(res); */
            }
            
        },
        err => console.error(err)
        );
      }
        

        
        
  }
  
  /* activada desde el buton del formulario y guarda la data */
  continuar(noFormul: string,fPresiFoto: string,nomfPresi: string,fVicepreFoto: string,nomfVicepre: string,VfId: number){
    this.isButtonVisible = true;
    
  // Mostrar la x
	this.valuId = VfId;
	
    
    this.dataFormu = [
      noFormul,
      fPresiFoto,
      nomfPresi,
      fVicepreFoto,
      nomfVicepre,
      VfId
    ]
    console.log('data formula ' + JSON.stringify(this.dataFormu));
    this.datosComponentService.guarDatosFormula(this.dataFormu);
  }

}
