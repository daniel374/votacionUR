import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';

// import { Subscription } from 'rxjs/Subscription';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router'

import { AuthService } from '../../services/auth.service';
import { EstudianteService } from '../../services/estudiante.service';
import { ResponseWs } from '../../interfaces/ResponseWs';
import { ResWsEstud } from '../../interfaces/ResWsEstud';
import { Configs } from '../../lib/config';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { DatosComponentService } from '../../services/datos-component.service';
import { ConsejosService } from '../../services/consejos.service';

import { infoPlanesWs } from '../../interfaces/infoPlanesWs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    titulo: string;
    session = false;
    public pageName: string;
    public modToken: string;

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
        private authService: AuthService,
        private ref: ChangeDetectorRef,
        private http: HttpClient,
        private estudianteService: EstudianteService,
		private ngZone: NgZone,
        private router: Router,
        private ngxXml2jsonService: NgxXml2jsonService,
        private datosComponentService: DatosComponentService,
		private consejosService: ConsejosService
        ) { this.titulo = 'VOTACIONES';
        }

    ngOnInit() {
        // Check if the session is still valid
        this.checkSession()
    }

    /**
     * @param type Could be: requests or agendamate
     */
    goToBackend(type): void {
        // if has session, only got to redirect
        if( this.authService.hasSessiontoken() ){
            console.log(' HAS SESSION STORED - Redirect To Backend');
            this.redirectToBackend(type);
        } else {
          // if hasnt, we must authenticate
            console.log('HASN\'T SESSION');
            this.authService.login(() => {
                console.log('NEW SESSION STORED - Redirect To Backend');
                // After login, go to redirect
                this.redirectToBackend(type);
            });
        }
    }

    redirectToBackend(type): void {
        console.log('[redirectToBackend]: ' + type);
        console.log('[redirectToBackend]: Get data info user');
        // Getting info for the user... email
        this.authService.getMe((me) => {
            console.log('[redirectToBackend] token is ok, getting token from Lambda');
            console.log(JSON.stringify(me));
            console.log(me.userPrincipalName);
            localStorage.setItem('datosUsuario', JSON.stringify(me));

            this.session = true;
            this.ref.detectChanges();

            this.getTokenAndRedirect(type, me.userPrincipalName);
        }, () => {
            /**
             * If this fails the meaninig could be: invalid token, expired token, etc...
             * Because that, we must logout and re try login
             */
            console.log('[redirectToBackend] token is wrong, hide button logout and logout api');
            this.logout();
            this.goToBackend(type);
        });
    }
    // consume servicio de proximate y retorna Token
    getTokenAndRedirect(type, userPrincipalName): void {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let respo: any;
        console.log('userPrincipalName ' + userPrincipalName);
        console.log('this.authService.hasSessiontoken()');
        console.log(this.authService.hasSessiontoken());
        // Getting token from our backend, we secure this combine email and msal token.
        // 'webadmin/authentication/tokensuniquesession' >
        // "https://serveless.proximateapps-services.com.mx/CasaUR/DEV/webadmin/authentication/login"
        respo = this.http.post<ResponseWs>(Configs.url + 'webadmin/authentication/login', {
            correo: 'proximateapps@gmail.com',
            // email: "aoropeza@proximateapps.com",
            contrasenia: 'Proximate10'
        }, {headers: headers}).subscribe(
            res => {
                console.log('res ' + res);
                console.log('res.token ' + res.token);

                if (res.token) {

                    // If the user whant to go request's backned
                    if ( type === 'votacion' && res.token){
                        this.pageName = 'votacion/consejo';
                        

                        localStorage.setItem('meToken', JSON.stringify(res.token));

                        this.infoEstudiante();
						this.ngZone.run(() =>this.router.navigate([`${this.pageName}`])).then();
                    } else {
                        alert('Usuario no registrado');
                    }
                }
            },
            err => {
                console.log('Error occured');
            }
        );
        return respo;
    }

    // Emplea el servicio de Estudiante para EXtraer la info. DEL Estudiante
    infoEstudiante() {
        var habilitado = true;
        var infoPlanes: infoPlanesWs;
        // var infoPlanes = new Object();
		var arrayinfoPlanes: any = [];
        
        this.estudianteService.dataEstudiante().subscribe(d => {
            
        /*  console.log('status del servicio: ' + JSON.stringify(d.statusCode));
            console.log('data estudiante servicio: ' + JSON.stringify(d.body)); */
            var parserXML = new DOMParser();
            var xmlDocEs = parserXML.parseFromString(d.body, 'text/xml');            

            /* ************* JSON ARRAY ************** */
            var obj = this.ngxXml2jsonService.xmlToJson(xmlDocEs);
            var objArray = obj['soapenv:Envelope']['S:Body']['wss:getProgramasResponse']['wss:return'];
         /* console.log('Json DocEs ');
            console.log(JSON.stringify(objArray));
            console.log('longitud ');
            console.log(objArray.length); */

            /* *************** Valida los Datos *************** */
            objArray.forEach(function(elemt,ind) {
                /* ************ ***** DATOS DEL ESTUDIANTE desde el XML **** ************ */
                var tipoest = xmlDocEs.getElementsByTagName('xsd:tipoest')[ind].childNodes[0].nodeValue;
                var bloqueado = xmlDocEs.getElementsByTagName('xsd:bloqueado')[ind].childNodes[0].nodeValue;
                var cerrado = xmlDocEs.getElementsByTagName('xsd:cerrado')[ind].childNodes[0].nodeValue;
                var retirado = xmlDocEs.getElementsByTagName('xsd:retirado')[ind].childNodes[0].nodeValue;
                var programa = xmlDocEs.getElementsByTagName('xsd:programa')[ind].childNodes[0].nodeValue;
                var semestre = xmlDocEs.getElementsByTagName('xsd:semestre')[ind].childNodes[0].nodeValue;
                
                console.log('tipoest del estudiante: ' + tipoest);
                console.log('bloqueado del estudiante: ' + bloqueado);
                console.log('cerrado del estudiante: ' + cerrado);
                console.log('retirado del estudiante: ' + retirado);
                console.log('programa del estudiante: ' + programa);
                console.log('semestre del estudiante: ' + semestre);
                if (tipoest === "PRE") {
                    if (bloqueado === "N") {
                        if (cerrado === "N") {
                            if (retirado === "N") {
                                habilitado = true;
                            } else {
                                habilitado = false;
                            }
                        } else {
                            habilitado = false;
                        }
                    } else {
                        habilitado = false;
                    }
                } else {
                    habilitado = false;
                }

                if (habilitado == false) { // Se debe cambiar a true
                    console.log('El Estudiante se encuentra habilido para el programa ' + programa);
                    infoPlanes = {
                        codigo: `${programa}`,
					    semestre: `${semestre}`,
                    }
                    /* infoPlanes.codigo = programa;
					infoPlanes.semestre = semestre; */
					arrayinfoPlanes.push(infoPlanes);
					localStorage.setItem('infoPlanes', JSON.stringify(arrayinfoPlanes));
					this.traerConsejos ();
					
                } else {
                    console.log('El Estudiante se encuentra Inhabilido para el programa ' + programa);
                }
				console.log('La info de los planes del estudiante: ' + JSON.stringify(arrayinfoPlanes));
                
            });
        });
        
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
		    console.log('El response del servicio lambda ');
        console.log(res.data);
      },
      err => console.error(err)
    );
  }


    logout(): void {
        // Call api msal
        this.authService.logout()
        // Change visual state
        this.session = false;
        this.ref.detectChanges();
    }

    checkSession(): void {
        console.log("[checkSession]");

        // Change visual state, if has ó hasnt token
        if ( this.authService.hasSessiontoken()) {
            console.log("[checkSession] has token, verify token wit http");
            this.session = true;
            this.ref.detectChanges();
        } else {
            console.log("[checkSession] hasnt token, hide button logout");
            this.session = false;
            this.ref.detectChanges();
        }
    }

}
