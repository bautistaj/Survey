import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'surveys',
    loadChildren: () => import('./survey/survey.module').then((m) => m.SurveyModule),
  },
  {
    path: 'pcbrands',
    loadChildren: () => import('./pc-brand/pc-brand.module').then((m) => m.PcBrandModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
