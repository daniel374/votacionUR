import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatosComponentService } from '../../services/datos-component.service';
import { RegisVotoService } from '../../services/regis-voto.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-resumen-voto',
  templateUrl: './resumen-voto.component.html',
  styleUrls: ['./resumen-voto.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ResumenVotoComponent implements OnInit {
  carga = 'Registrando Voto...';
  public vcId: any;
  public nomConsejo: any;
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
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
	config: NgbModalConfig
  ) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.resumenVoto();
    this.datosComponentService.cambiaSpinner('Registrando Voto');
  }

  resumenVoto(){
    this.dataForRepre = this.datosComponentService.resDatos;
      console.log('data formula y repre  ' + JSON.stringify(this.dataForRepre));
      
    this.vcId = this.dataForRepre[0] || 0;
	  this.nomConsejo = this.dataForRepre[1];  
    this.nomFormula = this.dataForRepre[4];
    this.forPresiFoto = this.dataForRepre[5];
    this.nomforPresi = this.dataForRepre[6];
    this.forVipreFoto = this.dataForRepre[7];
    this.nomforVipre = this.dataForRepre[8];
    this.idFormul = this.dataForRepre[9];
      

    console.log("nombre formula  "+this.nomFormula);
    console.log("foto presidente  "+this.forPresiFoto);
    console.log("nombre presidente  "+this.nomforPresi);
    console.log("foto vicepresidente  "+this.forVipreFoto);
    console.log("nombre vicepresidente  "+this.nomforVipre);
    console.log("id formula  "+this.idFormul);
        
    /* datos Representante */
    /*     this.datosRepre = 
    console.log("datos Representante  "+this.datosRepre); */

    this.repreFoto = this.dataForRepre[10];
    this.nomRepre = this.dataForRepre[11];
    this.semestRepre = this.dataForRepre[12];
    this.planRepre = this.dataForRepre[13];
    this.idRepre = this.dataForRepre[14];
        
    console.log("foto representante  "+this.repreFoto);
    console.log("nombre representante  "+this.nomRepre);
    console.log("semestre  "+this.semestRepre);
    console.log("plan representante  "+this.planRepre);
    console.log("id representante  "+this.idRepre);
    console.log("index plan  "+this.dataForRepre.indexOf(this.planRepre));
  }

  votar(modal){
    
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
	  this.registroVoto(modal);
  }


  registroVoto(modal) {
    this.spinner.show();
	  this.regisVotoService.regisVoto(this.numDoc, this.vcId, this.idFormul, this.idRepre).subscribe(
      res => {
        this.spinner.hide();
        this.idVoto = JSON.stringify(res.data[0][0]['id']);
        this.modalService.open(modal, { centered: true });
      },
      err => {
        this.spinner.hide();
        console.error(err);
      }
    );
	  return this.idVoto;
  }


}
