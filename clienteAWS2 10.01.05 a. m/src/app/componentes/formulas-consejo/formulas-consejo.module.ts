import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulasConsejoRoutingModule } from './formulas-consejo-routing.module';
import { FormulasConsejoComponent } from './formulas-consejo.component';

import { NavegacionModule } from '../navegacion/navegacion.module';


@NgModule({
  declarations: [
    FormulasConsejoComponent
  ],
  imports: [
    CommonModule,
    FormulasConsejoRoutingModule,
	NavegacionModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FormulasConsejoModule { }
