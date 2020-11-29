import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './components/survey/survey.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';

@NgModule({
  declarations: [SurveyComponent, SurveyFormComponent],
  imports: [
    CommonModule,
    SurveyRoutingModule
  ]
})
export class SurveyModule { }
