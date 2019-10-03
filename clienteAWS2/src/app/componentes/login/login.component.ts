import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router'

import { AuthService } from '../../services/auth.service';
import { EstudianteService } from '../../services/estudiante.service';
import { ResponseWs } from '../../interfaces/ResponseWs';
import { ResWsEstud } from '../../interfaces/ResWsEstud';
import { Configs } from '../../lib/config';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { DatosComponentService } from '../../services/datos-component.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
    public validado: any;


    constructor(
        private authService: AuthService,
        private ref: ChangeDetectorRef,
        private http: HttpClient,
        private estudianteService: EstudianteService,
		private ngZone: NgZone,
        private router: Router,
        private spinner: NgxSpinnerService,
        private ngxXml2jsonService: NgxXml2jsonService
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
            this.redirectToBackend(type);
        } else {
          // if hasnt, we must authenticate
            console.log('HASN\'T SESSION');
            this.authService.login(() => {
                // After login, go to redirect
                this.redirectToBackend(type);
            });
        }
    }

    redirectToBackend(type): void {
        this.spinner.show();
        console.log('[redirectToBackend]: ' + type);
        console.log('[redirectToBackend]: Get data info user');
        // Getting info for the user... email
        this.authService.getMe((me) => {
            console.log('[redirectToBackend] token is ok, getting token from Lambda');
            console.log(JSON.stringify(me));
            console.log(me.userPrincipalName);
            localStorage.setItem('datosUsuario', JSON.stringify(me));
            var numDoc = me.mobilePhone;
            var esNom = me.displayName;
            var email = me.userPrincipalName;
            if (numDoc){
                var arrayIdent = numDoc.split("&");
                numDoc = arrayIdent[1];
                localStorage.setItem('email', email);
                localStorage.setItem('esNom', esNom);
                localStorage.setItem('numDoc', numDoc);
                this.session = true;
                this.ref.detectChanges();
                this.getTokenAndRedirect(type, me.userPrincipalName);
            }else{
                this.spinner.hide();
                console.log('[redirectToBackend] token is wrong, hide button logout and logout api');
                this.logout();
            }
        }, () => {
            /**
             * If this fails the meaninig could be: invalid token, expired token, etc...
             * Because that, we must logout and re try login
             */
            this.spinner.hide();
            console.log('[redirectToBackend] token is wrong, hide button logout and logout api');
            this.logout();
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
                if (res.token) {
                    // If the user whant to go request's backned
                    if ( type === 'votacion' && res.token){
                        localStorage.setItem('meToken', JSON.stringify(res.token));
                        this.infoEstudiante();
                        this.validado = true;
                        console.log('validado ' + this.validado);
                    } else {
                        this.spinner.hide();
                        alert('Usuario no registrado');
                    }
                }else{
                    this.spinner.hide();
                }
            },
            err => {
                this.spinner.hide();
                console.log('Error occured');
            }
        );
        return respo;
    }

    // Emplea el servicio de Estudiante para EXtraer la info. DEL Estudiante
    infoEstudiante() {
        var habilitado = true;
        var infoPlanes: infoPlanesWs;
		var arrayinfoPlanes: any = [];
        this.estudianteService.dataEstudiante().subscribe(d => {
            
        /*  console.log('status del servicio: ' + JSON.stringify(d.statusCode));*/
        console.log('data estudiante servicio: ' + JSON.stringify(d.body)); 
        var parserXML = new DOMParser();
        var xmlDocEs = parserXML.parseFromString(d.body, 'text/xml');            
        console.log('xml ', xmlDocEs);
            /* ************* JSON ARRAY ************** */
        var obj = this.ngxXml2jsonService.xmlToJson(xmlDocEs);
        var objArray = obj['soapenv:Envelope']['S:Body']['wss:getProgramasResponse']['wss:return'];
        console.log(JSON.stringify(objArray));
        console.log('longitud ');
        /* var leng = objArray.length;
        console.log(leng); */
        
        if (objArray.length) {
            /* *************** Valida los Datos *************** */
            objArray.forEach(function(elemt,ind) {
                /* ************ ***** DATOS DEL ESTUDIANTE desde el XML **** ************ */
                var tipoest = xmlDocEs.getElementsByTagName('xsd:tipoest')[ind].childNodes[0].nodeValue;
                var bloqueado = xmlDocEs.getElementsByTagName('xsd:bloqueado')[ind].childNodes[0].nodeValue;
                var cerrado = xmlDocEs.getElementsByTagName('xsd:cerrado')[ind].childNodes[0].nodeValue;
                var retirado = xmlDocEs.getElementsByTagName('xsd:retirado')[ind].childNodes[0].nodeValue;
                var programa = xmlDocEs.getElementsByTagName('xsd:programa')[ind].childNodes[0].nodeValue;
                var semestre = xmlDocEs.getElementsByTagName('xsd:semestre')[ind].childNodes[0].nodeValue;
                
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

					arrayinfoPlanes.push(infoPlanes);
					localStorage.setItem('infoPlanes', JSON.stringify(arrayinfoPlanes));
                } 
            });
        } else {
            /* ************ ***** DATOS DEL ESTUDIANTE desde el XML **** ************ */
            var tipoest = xmlDocEs.getElementsByTagName('xsd:tipoest')[0].childNodes[0].nodeValue;
            var bloqueado = xmlDocEs.getElementsByTagName('xsd:bloqueado')[0].childNodes[0].nodeValue;
            var cerrado = xmlDocEs.getElementsByTagName('xsd:cerrado')[0].childNodes[0].nodeValue;
            var retirado = xmlDocEs.getElementsByTagName('xsd:retirado')[0].childNodes[0].nodeValue;
            var programa = xmlDocEs.getElementsByTagName('xsd:programa')[0].childNodes[0].nodeValue;
            if (xmlDocEs.getElementsByTagName('xsd:semestre')) {
                var semestre = xmlDocEs.getElementsByTagName('xsd:semestre')[0].childNodes[0].nodeValue;
            } else {
                this.spinner.hide();
                this.ngZone.run(() =>this.router.navigate(['/'])).then();
                console.log('No tiene permiso, no cuenta con semestre ');
            }
            
            
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

                arrayinfoPlanes.push(infoPlanes);
                localStorage.setItem('infoPlanes', JSON.stringify(arrayinfoPlanes));
            }
        }

            
            this.spinner.hide();
            if (arrayinfoPlanes != null && arrayinfoPlanes.length > 0){
                this.ngZone.run(() =>this.router.navigate(['votacion/consejo'])).then();
            }else{
                console.log('El Estudiante no se encuentra habilitado para votar comuniquese con el encargado');
            }
        });
        
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
