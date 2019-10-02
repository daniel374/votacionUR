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
	  this.datosEstudi = localStorage.getItem('datosUsuario');
    this.datosEstudi = JSON.parse(this.datosEstudi);
    console.log(this.datosEstudi);
    console.log('data estudiante:   ');
    console.log(JSON.stringify(this.datosEstudi));
    this.tpDoc = 1;
    this.numDoc = this.datosEstudi['mobilePhone'];
    this.esNom = this.datosEstudi['displayName'];
    this.email = this.datosEstudi['userPrincipalName'];
    if (this.numDoc) {
      var arrayIdent = this.numDoc.split("&");
      console.log('arrayIdent' + arrayIdent);
      this.numDoc = arrayIdent[1];
    } else if (this.email == "proximateapps@outlook.com") {
      this.numDoc = "NCE&1374";
      var arrayIdent = this.numDoc.split("&");
      console.log('arrayIdent ' + arrayIdent);
      this.numDoc = arrayIdent[1];
    } else {
    
    }
  
    this.infoPlanes = localStorage.getItem('infoPlanes');
    console.log('tipo documento ' + this.tpDoc);
    console.log('num. documento ' + this.numDoc);
    console.log('nombre estudi. ' + this.esNom);
    console.log('email ' + this.email);
    console.log('infoPlanes ' + this.infoPlanes);
    
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
