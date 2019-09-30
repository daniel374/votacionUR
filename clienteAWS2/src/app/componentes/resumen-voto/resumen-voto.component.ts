import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatosComponentService } from '../../services/datos-component.service';
import { RegisVotoService } from '../../services/regis-voto.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-resumen-voto',
  templateUrl: './resumen-voto.component.html',
  styleUrls: ['./resumen-voto.component.css']
})
export class ResumenVotoComponent implements OnInit {

  public vcId: any;

  /* data formu y repre */
  public dataForRepre: any;
  /* variables data formula */
  //public datosFormula: any;//array con data formula
  public nomFormula: any;
  public forPresiFoto: any;
  public nomforPresi: any;
  public forVipreFoto: any;
  public nomforVipre: any;
  public idFormul: any;
  
  /* variables data Representante */
  /* **************************** */
  
  //public datosRepre: any;
  public repreFoto: any;
  public nomRepre: any;
  public semestRepre: any;
  public planRepre: any;
  public idRepre: any;
  datosEstudi: any = [];
  esNom: any;
  email: any;
  public numDoc: any;
  /*  */
  idVoto: any;


  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private datosComponentService: DatosComponentService,
    private regisVotoService: RegisVotoService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.resumenVoto();
  }

  resumenVoto(){
    this.dataForRepre = this.datosComponentService.resDatos;
      console.log('data formula y repre  ' + JSON.stringify(this.dataForRepre));
      
    this.vcId = this.dataForRepre[0] || 0;
	this.nomConsejo = this.dataForRepre[1];  
    this.nomFormula = this.dataForRepre[3];
    this.forPresiFoto = this.dataForRepre[4];
    this.nomforPresi = this.dataForRepre[5];
    this.forVipreFoto = this.dataForRepre[6];
    this.nomforVipre = this.dataForRepre[7];
    this.idFormul = this.dataForRepre[8];
      

    console.log("nombre formula  "+this.nomFormula);
    console.log("foto presidente  "+this.forPresiFoto);
    console.log("nombre presidente  "+this.nomforPresi);
    console.log("foto vicepresidente  "+this.forVipreFoto);
    console.log("nombre vicepresidente  "+this.nomforVipre);
    console.log("id formula  "+this.idFormul);
        
    /* datos Representante */
    /*     this.datosRepre = 
    console.log("datos Representante  "+this.datosRepre); */

    this.repreFoto = this.dataForRepre[9];
    this.nomRepre = this.dataForRepre[10];
    this.semestRepre = this.dataForRepre[11];
    this.planRepre = this.dataForRepre[12];
    this.idRepre = this.dataForRepre[13];
        
    console.log("foto representante  "+this.repreFoto);
    console.log("nombre representante  "+this.nomRepre);
    console.log("semestre  "+this.semestRepre);
    console.log("plan representante  "+this.planRepre);
    console.log("id representante  "+this.idRepre);
    console.log("index plan  "+this.dataForRepre.indexOf(this.planRepre));
  }

  votar(modal){
    this.modalService.open(modal);
	console.log("datos res WS "+this.datosComponentService.resDatos);
    

    this.datosEstudi = localStorage.getItem('datosUsuario');
    this.datosEstudi = JSON.parse(this.datosEstudi);
    this.esNom = this.datosEstudi['displayName'];
    this.numDoc = this.datosEstudi['mobilePhone'];

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
    /* servicio Guarda Voto */
	this.registroVoto();
  }


  registroVoto() {
	  this.regisVotoService.regisVoto(this.numDoc, this.vcId, this.idFormul, this.idRepre).subscribe(
      res => {
        this.idVoto = JSON.stringify(res.data[0][0]['id']);
		  console.log('El response del servicio lambda ');
          console.log(res.data);
		  console.log('id ');
		  console.log(this.idVoto);
		    
      },
      err => console.error(err)
    );
	  return this.idVoto;
  }


}
