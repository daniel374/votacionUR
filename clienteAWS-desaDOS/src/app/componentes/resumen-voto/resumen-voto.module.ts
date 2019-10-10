import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumenVotoRoutingModule } from './resumen-voto-routing.module';
import { ResumenVotoComponent } from './resumen-voto.component';
import { NavegacionModule } from '../navegacion/navegacion.module';

@NgModule({
  declarations: [
	  ResumenVotoComponent
  ],
  imports: [
    CommonModule,
    ResumenVotoRoutingModule,
	NavegacionModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ResumenVotoModule { }
