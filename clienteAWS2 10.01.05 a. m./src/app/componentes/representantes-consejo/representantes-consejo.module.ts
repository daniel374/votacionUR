import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepresentantesConsejoRoutingModule } from './representantes-consejo-routing.module';
import { RepresentantesConsejoComponent } from './representantes-consejo.component';
import { NavegacionModule } from '../navegacion/navegacion.module';


@NgModule({
  declarations: [
	  RepresentantesConsejoComponent
  ],
  imports: [
    CommonModule,
    RepresentantesConsejoRoutingModule,
	NavegacionModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RepresentantesConsejoModule { }
