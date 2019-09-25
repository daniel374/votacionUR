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
  datosEstudi: any = [];
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
    
	this.datosEstudi = localStorage.getItem('datosUsuario');
	this.datosEstudi = JSON.parse(this.datosEstudi);
	console.log(this.datosEstudi);
	console.log('data estudiante:   ');
	console.log(JSON.stringify(this.datosEstudi));
    this.tpDoc = 1;
    // this.numDoc = this.datosEstudi['mobilePhone'];
	this.numDoc = "1374"; // descomentar la linea de arriba para validacion
    this.esNom = this.datosEstudi['displayName'];
    this.email = this.datosEstudi['userPrincipalName'];
    this.infoPlanes = localStorage.getItem('infoPlanes');
    console.log('tipo documento ' + this.tpDoc);
    console.log('num. documento ' + this.numDoc);
    console.log('nombre estudi. ' + this.esNom);
    console.log('email ' + this.email);
    console.log('infoPlanes ' + this.infoPlanes);
    
	this.consejosService.getConsejos(this.tpDoc, this.numDoc, this.esNom, this.email, this.infoPlanes).subscribe(
      res => {
        this.consejos = res;
		console.log('El response del servicio lambda ');
        console.log(res);
      },
      err => console.error(err)
    );
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
