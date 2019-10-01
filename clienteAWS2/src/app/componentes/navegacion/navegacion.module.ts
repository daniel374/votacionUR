import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavegacionRoutingModule } from './navegacion-routing.module';
import { NavegacionComponent } from './navegacion.component';


@NgModule({
  imports: [
    CommonModule,
    NavegacionRoutingModule
  ],
  declarations: [NavegacionComponent],
  exports: [
	  NavegacionComponent, CommonModule
  ]
})
export class NavegacionModule { }
