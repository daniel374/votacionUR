import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	
	{
		path: 'votacion',
		loadChildren: () => import('./componentes/login/login.module').then(mod => mod.LoginModule)
	},
	{
		path: 'votacion/consejo',
		loadChildren: () => import('./componentes/consejos/consejos.module').then(mod => mod.ConsejosModule)
	},
	{
		path: 'votacion/consejo/formulas',
		loadChildren: () => import('./componentes/formulas-consejo/formulas-consejo.module').then(mod => mod.FormulasConsejoModule)
	},
	{
		path: 'votacion/consejo/formulas/representantes',
		loadChildren: () => import('./componentes/representantes-consejo/representantes-consejo.module').then(mod => mod.RepresentantesConsejoModule)
	},
	{
	    path: 'votacion/consejo/formulas/representantes/resumenVoto',
		loadChildren: () => import('./componentes/resumen-voto/resumen-voto.module').then(mod => mod.ResumenVotoModule)
	},
	{
        path: '', 
		redirectTo: 'votacion', 
		pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
