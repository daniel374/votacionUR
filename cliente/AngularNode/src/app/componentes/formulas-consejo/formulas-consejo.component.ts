import { Component, OnInit, Input } from '@angular/core';
import { FormulasService } from '../../services/formulas.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-formulas-consejo',
  templateUrl: './formulas-consejo.component.html',
  styleUrls: ['./formulas-consejo.component.css']
})
export class FormulasConsejoComponent implements OnInit {

  //@Input('VcId')VcId: number;
  dataFormu: any;
  noFormu:any;
  /* noFormul: string;
  fPresiFoto: string;
  nofPresi: string;
  fVicepreFoto: string;
  nofVicepre: string; */
  vcId: any;
  noConsejo: any;
  formulas: any = [];
  forConsejo: string;
  
  public isButtonVisible: boolean;

  constructor(private formulasService: FormulasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    /* this.route.queryParams.subscribe(p => {
      this.vcId = +p['vcId'] || 0;
      if(this.vcId !=0){
        console.log(this.vcId);
        this.formulasService.getFormulasConse(this.vcId).subscribe(
          res => {
            this.formulas = res;
            this.forConsejo = res[0]['VcNombre'];
            console.log(this.forConsejo);
            console.log(res);
          },
          err => console.error(err)
        );
      }
    }) */

    /*  */

    this.route.queryParams.subscribe((p: ParamMap) => {
      this.vcId = +p['vcId'] || 0;
      this.noConsejo = +p['noConsejo']
      if(this.vcId !=0){
        console.log(this.vcId);// Id del consejo
        console.log(this.noConsejo);// nombre del consejo
        this.formulasService.getFormulasConse(this.vcId).subscribe(
          res => {
            this.formulas = res;
            this.forConsejo = res[0]['VcNombre'];
            console.log(this.forConsejo);
            console.log(res);
          },
          err => console.error(err)
        );
      }
    });

    /*  */
    
    
    //

    /* this.formulasService.getFormulasConse(this.vcId).subscribe(
      res => {
        this.formulas = res;
        //this.forConsejo = res[0]['VcNombre'];
        this.forConsejo = "CIENCIAS NATURALES Y MATEMÁTICAS";
        //console.log(this.forConsejo);
        console.log(res);
      },
      err => console.error(err)
    ); */
  }

  continuar(noFormul: string,fPresiFoto: string,nomfPresi: string,fVicepreFoto: string,nomfVicepre: string){
    this.isButtonVisible = true;
    this.noFormu = noFormul;
    /* this.dataFormu = {
      "noFormul": noFormul,
      "fPresiFoto": fPresiFoto,
      "nofPresi": nomfPresi,
      "fVicepreFoto": fVicepreFoto,
      "nofVicepre": nomfVicepre,
    } */
    this.dataFormu = [
      noFormul,
      fPresiFoto,
      nomfPresi,
      fVicepreFoto,
      nomfVicepre,
    ]
    
  }

  iraRepresent(votacion: string){

  }

}
