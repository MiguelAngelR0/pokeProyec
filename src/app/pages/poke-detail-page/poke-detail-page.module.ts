import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeDetailPageComponent } from './poke-detail-page.component';
import { PokeDetailModule } from 'src/app/components/poke-detail/poke-detail.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PokeDetailPageComponent,
  },
];

@NgModule({
  declarations: [PokeDetailPageComponent],
  imports: [
    CommonModule,PokeDetailModule, RouterModule.forChild(routes)
  ]
})
export class PokeDetailPageModule { }
