import { Component, OnInit } from '@angular/core';
import { ConsejosService } from '../../services/consejos.service';
import { DatosComponentService } from '../../services/datos-component.service';

@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.css']
})
export class ConsejosComponent implements OnInit {

  consejos: any = [];
  idConsejo: number;
  /* variables data consejo */
  datConsejo: any = [];
  
  tpDoc: any;
  numDoc: any;
  esNom: any;
  email: any;
  infoPlanes: any;
  
  constructor(
    private consejosService: ConsejosService,
    private datosComponentService: DatosComponentService  
  ) { }

  formulasConsejo(idConsejo){
    console.log(idConsejo);
  }


  ngOnInit() {
    this.tpDoc = this.datosComponentService.resDatosEst;
    console.log('datos del estudiante ' + this.tpDoc);
    /* this.numDoc = String(this.datosComponentService.resDatosEst[1]);
    this.esNom = String(this.datosComponentService.resDatosEst[2]);
    this.email = String(this.datosComponentService.resDatosEst[3]);
    this.infoPlanes = String(this.datosComponentService.resDatosEst[4]);
    console.log('tipo documento ' + this.tpDoc);
    console.log('num. documento ' + this.numDoc);
    console.log('nombre estudi. ' + this.esNom);
    console.log('email ' + this.email);
    console.log('infoPlanes ' + this.infoPlanes); */
/*     this.consejosService.getConsejos(this.tpDoc, this.numDoc, this.esNom, this.email, this.infoPlanes).subscribe(
      res => {
        this.consejos = res;
        console.log(res);
      },
      err => console.error(err)
    ); */
  }

  serGuarConsejo(vcId: number, noConsejo: any){
    this.datConsejo = [
      vcId,
      noConsejo
    ]
    console.log("info service consejo "+this.datConsejo);
    this.datosComponentService.guarDatosConsejo(this.datConsejo);
  }

}
