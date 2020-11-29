import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './components/survey/survey.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SurveyComponent, SurveyFormComponent],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SurveyModule { }
