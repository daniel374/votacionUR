import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumenVotoComponent } from './resumen-voto.component';

const routes: Routes = [
	{
		path: '',
		component: ResumenVotoComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumenVotoRoutingModule { }
