import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ConsejosComponent } from './componentes/consejos/consejos.component';
import { FormulasConsejoComponent } from './componentes/formulas-consejo/formulas-consejo.component';
import { RepresentantesConsejoComponent } from './componentes/representantes-consejo/representantes-consejo.component';

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
    path: 'votacion/formulas', component: FormulasConsejoComponent
  },
  {
    path: 'votacion/representantes', component: RepresentantesConsejoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
