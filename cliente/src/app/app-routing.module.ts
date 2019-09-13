import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ConsejosComponent } from './componentes/consejos/consejos.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'consejos', component: ConsejosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
