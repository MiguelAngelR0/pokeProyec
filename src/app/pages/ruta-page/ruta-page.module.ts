import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutaPageComponent } from './ruta-page.component';
import { RouterModule, Routes } from '@angular/router';
import { RutaModule } from 'src/app/components/ruta/ruta.module';

const routes: Routes = [
  {
    path: '',
    component: RutaPageComponent,
  },
];


@NgModule({
  declarations: [RutaPageComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),RutaModule
  ],exports:[RutaPageComponent]
})
export class RutaPageModule { }
