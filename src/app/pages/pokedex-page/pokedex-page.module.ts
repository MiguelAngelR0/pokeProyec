import {MatTooltipModule} from '@angular/material/tooltip';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexPageComponent } from './pokedex-page.component';
import { RouterModule, Routes } from '@angular/router';






import { PokedexModule } from 'src/app/components/pokedex/pokedex.module';

const routes: Routes = [
  {
    path: '',
    component: PokedexPageComponent,
  },
];

@NgModule({
  declarations: [PokedexPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes),PokedexModule],
  exports:[]
})
export class PokedexPageModule {}

