import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PcBrandFormComponent } from './components/pc-brand-form/pc-brand-form.component';
import { LayoutComponent } from './../layout/layout.component';
import { PcBrandComponent } from './components/pc-brand/pc-brand.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'form',
        component: PcBrandFormComponent,
      },
      {
        path: 'page/:page',
        component: PcBrandComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcBrandRoutingModule { }
