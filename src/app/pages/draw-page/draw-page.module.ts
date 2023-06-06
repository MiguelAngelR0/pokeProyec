import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawPageComponent } from './draw-page.component';
import { RouterModule, Routes } from '@angular/router';
import { Draw2Module } from 'src/app/components/draw2/draw2.module';



const routes: Routes = [
  {
    path: '',
    component: DrawPageComponent,
  },
];

@NgModule({
  declarations: [DrawPageComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),Draw2Module
  ]
})
export class DrawPageModule { }
