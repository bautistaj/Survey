import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcBrandFormComponent } from './components/pc-brand-form/pc-brand-form.component';
import { LayoutComponent } from './../layout/layout.component';
import { PcBrandComponent } from './components/pc-brand/pc-brand.component';
import { AuthGuard } from './../auth/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'form/:id',
        component: PcBrandFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'form',
        component: PcBrandFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'page/:page',
        component: PcBrandComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcBrandRoutingModule { }
