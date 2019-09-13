import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    ConsejosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [HttpService, AuthService, EstudianteService, ConsejosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
