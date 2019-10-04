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
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from "ngx-spinner";

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';

export function tokenGetter() {
  return localStorage.getItem("meToken");
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
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    NgSelectModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
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
    DatosComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
