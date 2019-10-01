import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsejosComponent } from './consejos.component';


const routes: Routes = [
	{
		path: '',
		component: ConsejosComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsejosRoutingModule { }
