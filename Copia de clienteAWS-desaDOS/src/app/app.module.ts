import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';
import { EstudianteService } from './services/estudiante.service';
import { ConsejosService } from './services/consejos.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RepresentantesService } from './services/representantes.service';
import { FormulasService } from './services/formulas.service';
import { DatosComponentService } from './services/datos-component.service';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md';
import { NavegacionModule } from './componentes/navegacion/navegacion.module';
import { TimeVotoService } from './services/time-voto.service';

import { MsalModule } from '@azure/msal-angular';
import { Configs } from './lib/config';

export function tokenGetter() {
  return localStorage.getItem("meToken");
}
export function loggerCallback(logLevel, message, piiEnabled) {
  console.log(message);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    DropdownModule.forRoot(),
    NavegacionModule,
    MsalModule.forRoot({
      clientID: Configs.appId,
      cacheLocation : "localStorage",
      storeAuthStateInCookie: false,
      consentScopes: ["user.read", "mail.send"],
      logger :loggerCallback,
      correlationId: '1234',
      //level: LogLevel.Verbose,
      piiLoggingEnabled: true,
    })
  ],
  exports: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    HttpService,
    AuthService,
    EstudianteService,
    ConsejosService,
    RepresentantesService,
    FormulasService,
    DatosComponentService,
    TimeVotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
