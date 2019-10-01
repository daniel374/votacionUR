import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

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
import { SpinnerService } from './services/spinner.service';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './componentes/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule  
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
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
