import { Component, OnInit } from '@angular/core';
import { ConsejosService } from '../../services/consejos.service';
import { DatosComponentService } from '../../services/datos-component.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.css']
})
export class ConsejosComponent implements OnInit {
  msjCarga: any;
  idConsejo: number;
  /* variables data consejo */
  consejos: any = [];
  datConsejo: any = [];
  datosEstudi: any = [];
  tpDoc: any;
  numDoc: any;
  esNom: any;
  email: any;
  infoPlanes: any = [];
  
  constructor(
    private consejosService: ConsejosService,
    private datosComponentService: DatosComponentService,
    private spinner: NgxSpinnerService,
    private router: Router  
  ) {
    
  }

  /* this.msjCarga = this.datosComponentService.msjSpinner;
  this.msjCarga = 'Consejos Cargando...'; */

  formulasConsejo(idConsejo){
    console.log(idConsejo);
  }


  ngOnInit(): void {
    /** spinner starts on init */
    //this.spinnerService.activate();
    this.spinner.show();
    this.traerConsejos ();
    //this.router.navigate(['votacion/consejo']);
  }

  traerConsejos () {
    this.tpDoc = 1;
    this.numDoc = localStorage.getItem('numDoc');
    this.esNom = localStorage.getItem('esNom');
    this.email = localStorage.getItem('email');
    this.infoPlanes = localStorage.getItem('infoPlanes');
    
    this.consejosService.getConsejos(this.tpDoc, this.numDoc, this.esNom, this.email, this.infoPlanes).subscribe(
      res => {
        this.consejos = res.data;
        this.spinner.hide();
        console.log('El response del servicio lambda ');
        console.log(res.data);
      },
      err => {
        this.spinner.hide();
        console.error(err);
      }
    );
  }


  serGuarConsejo(vcId: number, noConsejo: any, nomPlan: any, semesPl: any){
    this.datConsejo = [
      vcId,
      noConsejo,
      nomPlan,
      semesPl
    ]
    console.log("info service consejo "+this.datConsejo);
    this.datosComponentService.guarDatosConsejo(this.datConsejo);
  }

}
