import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { PagerComponent } from './components/pager/pager.component';

@NgModule({
  declarations: [HeaderComponent, PagerComponent],
  exports: [
    HeaderComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
