import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulasConsejoComponent } from './formulas-consejo.component';


const routes: Routes = [
	{
		path: '',
		component: FormulasConsejoComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulasConsejoRoutingModule { }
