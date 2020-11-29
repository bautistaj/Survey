import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/guard/auth.guard';
import { LayoutComponent } from './../layout/layout.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'form/:id',
        component: UserFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'form',
        component: UserFormComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'page/:page',
        component: UserComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
