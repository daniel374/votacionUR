import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
//import { Subscription } from 'rxjs/Subscription';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router'

import { AuthService } from '../../services/auth.service';
import { EstudianteService } from '../../services/estudiante.service';
import { ResponseWs } from '../../interfaces/ResponseWs';
import { ResWsEstud } from '../../interfaces/ResWsEstud';
import { Configs } from '../../lib/config';




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

    constructor(
        private authService: AuthService,
        private ref: ChangeDetectorRef,
        private http: HttpClient,
        private estudianteService: EstudianteService,
        private router: Router
        ) { 
        this.titulo = 'VOTACIONES';
        
    }

    ngOnInit() {
        //Check if the session is still valid
        this.checkSession()
    }

    /**
     * @param type Could be: requests or agendamate
     */
    goToBackend(type): void {
        //if has session, only got to redirect
        if( this.authService.hasSessiontoken() ){
            console.log("HAS SESSION STORED - Redirect To Backend");
            this.redirectToBackend(type);
        }
        //if hasnt, we must authenticate
        else{
            console.log("HASN'T SESSION");
            this.authService.login(() => {
                console.log("NEW SESSION STORED - Redirect To Backend");
                //After login, go to redirect
                this.redirectToBackend(type);
            });
        }
    }

    redirectToBackend(type): void {
        console.log("[redirectToBackend]: "+type);
        console.log("[redirectToBackend]: Get data info user");
        //Getting info for the user... email
        this.authService.getMe((me) => {
            console.log("[redirectToBackend] token is ok, getting token from Lambda");
            console.log(JSON.stringify(me));
            console.log(me.userPrincipalName);
            localStorage.setItem('datosUsuario',JSON.stringify(me));

            this.session = true;
            this.ref.detectChanges();

            this.getTokenAndRedirect(type, me.userPrincipalName);
            
        }, () => {
            /**
             * If this fails the meaninig could be: invalid token, expired token, etc...
             * Because that, we must logout and re try login
             */
            console.log("[redirectToBackend] token is wrong, hide button logout and logout api");
            this.logout();
            this.goToBackend(type);
        });    
    }
    //consume servicio de proximate y retorna Token
    getTokenAndRedirect(type, userPrincipalName): void {
        let headers = new HttpHeaders().set('Content-Type','application/json');
        let respo: any;
        console.log("userPrincipalName "+userPrincipalName);
        console.log("this.authService.hasSessiontoken()");
        console.log(this.authService.hasSessiontoken());
        //Getting token from our backend, we secure this combine email and msal token. 'webadmin/authentication/tokensuniquesession' > "https://serveless.proximateapps-services.com.mx/CasaUR/DEV/webadmin/authentication/login"
        respo = this.http.post<ResponseWs>(Configs.url + 'webadmin/authentication/login', {
            correo: "proximateapps@gmail.com",
            //email: "aoropeza@proximateapps.com",
            contrasenia: "Proximate10"
        }, {headers: headers}).subscribe(
            res => {
                console.log("res "+res);
                console.log("res.token "+res.token);
                
                if(res.token){
                
                    //If the user whant to go request's backned
                    if( type == "votacion" && res.token){
                        this.pageName = 'votacion/consejo';
                        this.router.navigate([`${this.pageName}`])
                                                
                        localStorage.setItem('meToken',JSON.stringify(res.token));
                        
                        this.infoEstudiante();
                    }
                    
                    else{
                        alert("Usuario no registrado");
                    }
                }
            },
            err => {
                console.log("Error occured");
            }
        );
        return respo;
    }

    //Emplea el servicio de Estudiante para EXtraer la info. DEL Estudiante
    infoEstudiante(){
        this.estudianteService.dataEstudiante().subscribe(d=>{
            console.log("status del servicio: "+JSON.stringify(d.statusCode));
            console.log("data estudiante servicio: "+JSON.stringify(d.body));
            var parserXML = new DOMParser();
            var xmlDocEs = parserXML.parseFromString(d.body,"text/xml");
            console.log("xml info estudiante: "+xmlDocEs.getElementsByTagName("xsd:tipoest")[0].childNodes[0].nodeValue);
        });
    }
    

    logout(): void {
        //Call api msal
        this.authService.logout()
        //Change visual state
        this.session = false;
        this.ref.detectChanges();
    }

    checkSession(): void {
        console.log("[checkSession]");
        
        //Change visual state, if has ó hasnt token
        if( this.authService.hasSessiontoken() ){
            console.log("[checkSession] has token, verify token wit http");
            this.session = true;
            this.ref.detectChanges();
        }
        else{
            console.log("[checkSession] hasnt token, hide button logout");
            this.session = false;
            this.ref.detectChanges();
        }
    }
    /* Data para validar desde el Frontend si es correcta se consume el servicio
				tipoest,
				bloqueado,
				cerrado,
				retirado
				nombreFacultad para obtener el VcId'S de los consejos
				programa, //es el codigo del programa
				nombreprograma,
				semestre, */

}
