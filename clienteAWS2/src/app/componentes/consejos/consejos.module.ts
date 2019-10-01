import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsejosRoutingModule } from './consejos-routing.module';
import { ConsejosComponent } from './consejos.component';

import { NavegacionModule } from '../navegacion/navegacion.module';




@NgModule({
  declarations: [
	  ConsejosComponent
  ],
  imports: [
    CommonModule,
    ConsejosRoutingModule,
	NavegacionModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ConsejosModule { }
