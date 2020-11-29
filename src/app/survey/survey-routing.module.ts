import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { SurveyComponent } from './components/survey/survey.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'form',
        component: SurveyFormComponent,
      },
      {
        path: 'form/:id',
        component: SurveyFormComponent,
      },
      {
        path: 'page/:page',
        component: SurveyComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
