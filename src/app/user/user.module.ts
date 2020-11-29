import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserComponent } from './components/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [UserFormComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UserModule { }
