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
  public idRepre: any = [];
  datosEstudi: any = [];
  esNom: any;
  email: any;
  public numDoc: any;
  /*  */
  idVoto: any;
  dataLimp: any = [];
  representantes: any;


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
      //console.log('data formula y repre  ' + JSON.stringify(this.dataForRepre));
      console.log('longitud del resdData ' + this.dataForRepre.length);
    this.vcId = this.dataForRepre[0] || 0;
    this.nomConsejo = this.dataForRepre[1];
     /* data formula */ 
    this.nomFormula = this.dataForRepre[4];
    this.forPresiFoto = this.dataForRepre[5];
    this.nomforPresi = this.dataForRepre[6];
    this.forVipreFoto = this.dataForRepre[7];
    this.nomforVipre = this.dataForRepre[8];
    this.idFormul = this.dataForRepre[9];
      

    /* para el caso de mandar dos representantes */
    if (this.dataForRepre.length < 16) {
      this.representantes = [
        {
          "repreFoto": `${this.dataForRepre[10]}`,
          "nomRepre": `${this.dataForRepre[11]}`,
          "semestRepre": `${this.dataForRepre[12]}`,
          "planRepre": `${this.dataForRepre[13]}`,
          "idRepre": `${this.dataForRepre[14]}`
        }
      ];

      console.log('data repre' + JSON.stringify(this.representantes));

    } else {
      this.representantes = [
        {
          "repreFoto": `${this.dataForRepre[10]}`,
          "nomRepre": `${this.dataForRepre[11]}`,
          "semestRepre": `${this.dataForRepre[12]}`,
          "planRepre": `${this.dataForRepre[13]}`,
          "idRepre": `${this.dataForRepre[14]}`
        },
        {
          "repreFoto": `${this.dataForRepre[15]}`,
          "nomRepre": `${this.dataForRepre[16]}`,
          "semestRepre": `${this.dataForRepre[17]}`,
          "planRepre": `${this.dataForRepre[18]}`,
          "idRepre": `${this.dataForRepre[19]}`
        }
      ];
      console.log('data repre > 15 ' + JSON.stringify(this.representantes));
    }
    
    console.log('INFORMACION Representante  ' + JSON.stringify(this.representantes));

    this.representantes.forEach(element => {
      this.idRepre.push(element['idRepre']);
    })    
    console.log('los Id de repres: .' + JSON.stringify(this.idRepre));
    
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
        this.datosComponentService.borrarData(this.dataLimp);
      },
      err => {
        this.spinner.hide();
        console.error(err);
      }
    );
	  return this.idVoto;
  }


}
