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
      this.noConsejo = String(this.datosComponentService.resDatos[1]);
      console.log("vcId "+this.vcId);
      console.log("noConsejo "+this.noConsejo);
      if(this.vcId !=0){
        this.formulasService.formulasConse(this.vcId).subscribe(
          res=>{
            console.log("status del servicio: "+JSON.stringify(res.success));
            console.log("data formulas consejo servicio: "+JSON.stringify(res.data));
            this.formulas = res.data;
            if(this.formulas!=''){
              this.forConsejo = res.data[0]['VcNombre'];
              console.log("forconsejo "+this.forConsejo);
              console.log(res);
            }else{
              this.forConsejo = this.noConsejo;
              console.log(this.forConsejo);
              console.log(res);
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
	console.log(' id formula ' + VfId);
	console.log(' id value ' + this.valuId);
	
    
    this.dataFormu = [
      noFormul,
      fPresiFoto,
      nomfPresi,
      fVicepreFoto,
      nomfVicepre,
      VfId
    ]
    this.datosComponentService.guarDatosFormula(this.dataFormu);
  }

  iraRepresent(votacion: string){

  }

}
