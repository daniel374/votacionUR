import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ConsejosComponent } from './componentes/consejos/consejos.component';
import { FormulasConsejosComponent } from './componentes/formulas-consejos/formulas-consejos.component';
import { RepresentantesConsejosComponent } from './componentes/representantes-consejos/representantes-consejos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsejosComponent,
    FormulasConsejosComponent,
    RepresentantesConsejosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
