import { Component, OnInit, Input } from '@angular/core';
import { FormulasService } from '../../services/formulas.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-formulas-consejo',
  templateUrl: './formulas-consejo.component.html',
  styleUrls: ['./formulas-consejo.component.css']
})
export class FormulasConsejoComponent implements OnInit {

  @Input('VcId')VcId: number;

  formulas: any = [];
  forConsejo: string;
  
  public isButtonVisible: boolean;

  constructor(private formulasService: FormulasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;
    if (params.VcId) {
      this.formulasService.getFormulasConse(params.VcId)
        .subscribe(
          res => {
            this.formulas = res;
            this.forConsejo = res[0]['VcNombre'];
            console.log(this.forConsejo);
            console.log(res);
          },
          err => console.log(err)
        )
    }

    /* this.activatedRoute.queryParams.subscribe(conId => {
      this.VcId = +conId['VcId'] || 0;
      if(this.VcId!=0){
        console.log(this.VcId);
        
        this.formulasService.getFormulasConse(this.VcId).subscribe(
          res => {
            this.formulas = res;
            this.forConsejo = res[0]['VcNombre'];
            console.log(this.forConsejo);
            console.log(res);
          },
          err => console.error(err)
        );
      }
    }); */

    this.isButtonVisible = true;

    /* this.formulasService.getFormulas().subscribe(
      res => {
        this.formulas = res;
        this.forConsejo = res[0]['VcNombre'];
        console.log(this.forConsejo);
        console.log(res);
      },
      err => console.error(err)
    ); */
  }

  goToBackend(votacion:string){

  }

}
