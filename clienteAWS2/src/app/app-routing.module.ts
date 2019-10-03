import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	
	{
		path: 'votacion',
		loadChildren: () => import('./componentes/login/login.module').then(mod => mod.LoginModule)
	},
	{
		path: 'votacion/consejo',
		loadChildren: () => import('./componentes/consejos/consejos.module').then(mod => mod.ConsejosModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'votacion/consejo/formulas',
		loadChildren: () => import('./componentes/formulas-consejo/formulas-consejo.module').then(mod => mod.FormulasConsejoModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'votacion/consejo/formulas/representantes',
		loadChildren: () => import('./componentes/representantes-consejo/representantes-consejo.module').then(mod => mod.RepresentantesConsejoModule),
		canActivate: [AuthGuard]
	},
	{
	    path: 'votacion/consejo/formulas/representantes/resumenVoto',
		loadChildren: () => import('./componentes/resumen-voto/resumen-voto.module').then(mod => mod.ResumenVotoModule),
		canActivate: [AuthGuard]
	},
	{
        path: '', 
		redirectTo: '/votacion', 
		pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
