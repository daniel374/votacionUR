import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ConsejosComponent } from './componentes/consejos/consejos.component';
import { FormulasConsejoComponent } from './componentes/formulas-consejo/formulas-consejo.component';
import { RepresentantesConsejoComponent } from './componentes/representantes-consejo/representantes-consejo.component';
import { ResumenVotoComponent } from './componentes/resumen-voto/resumen-voto.component';
import { IdVotoComponent } from './componentes/id-voto/id-voto.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'votacion', pathMatch: 'full'
  },
  {
    path: 'votacion', component: LoginComponent
  },
  {
    path: 'votacion/consejo', component: ConsejosComponent
  },
  {
    path: 'votacion/consejo/formulas', component: FormulasConsejoComponent
  },
  {
    path: 'votacion/consejo/formulas/representantes', component: RepresentantesConsejoComponent
  },
  {
    path: 'votacion/consejo/formulas/representantes/resumenVoto', component: ResumenVotoComponent
  },
  {
    path: 'votacion/consejo/formulas/representantes/resumenVoto/idVoto', component: IdVotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
