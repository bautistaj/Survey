import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PcBrandRoutingModule } from './pc-brand-routing.module';
import { PcBrandFormComponent } from './components/pc-brand-form/pc-brand-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { PcBrandComponent } from './components/pc-brand/pc-brand.component';

@NgModule({
  declarations: [PcBrandFormComponent, PcBrandComponent],
  imports: [
    CommonModule,
    PcBrandRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PcBrandModule { }
