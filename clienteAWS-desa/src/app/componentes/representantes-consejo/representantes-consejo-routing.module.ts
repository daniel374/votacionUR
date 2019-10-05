import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepresentantesConsejoComponent } from './representantes-consejo.component';


const routes: Routes = [
	{
		path: '',
		component: RepresentantesConsejoComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentantesConsejoRoutingModule { }
