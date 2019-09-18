import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibModule } from '../lib/lib.module';
import { TemporalComponent } from './temporal.component';





@NgModule({
  declarations: [TemporalComponent],
  imports: [
    CommonModule, LibModule 
  ],
  exports: [TemporalComponent]
})
export class TemporalModule { }
