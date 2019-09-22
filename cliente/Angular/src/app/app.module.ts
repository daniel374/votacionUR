import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { ConsejosComponent } from './componentes/consejos/consejos.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';
import { EstudianteService } from './services/estudiante.service';
import { ConsejosService } from './services/consejos.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormulasConsejoComponent } from './componentes/formulas-consejo/formulas-consejo.component';
import { RepresentantesConsejoComponent } from './componentes/representantes-consejo/representantes-consejo.component';
import { RepresentantesService } from './services/representantes.service';
import { FormulasService } from './services/formulas.service';
import { ResumenVotoComponent } from './componentes/resumen-voto/resumen-voto.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { DatosComponentService } from './services/datos-component.service';

@NgModule({
  declarations: [
    AppComponent,
    ConsejosComponent,
    LoginComponent,
    FormulasConsejoComponent,
    RepresentantesConsejoComponent,
    ResumenVotoComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    RouterModule
  ],
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
