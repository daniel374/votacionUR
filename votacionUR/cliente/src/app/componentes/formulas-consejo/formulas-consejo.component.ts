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
  vcId: any;
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

  continuar(){
    this.isButtonVisible = true;
  }

  iraRepresent(votacion: string){

  }

}
