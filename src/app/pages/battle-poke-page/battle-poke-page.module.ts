import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattlePokePageComponent } from './battle-poke-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FightPokeModule } from 'src/app/components/fight-poke/fight-poke.module';


const routes: Routes = [
  {
    path: '',
    component: BattlePokePageComponent,
  },
];

@NgModule({
  declarations: [BattlePokePageComponent],
  imports: [
    CommonModule,FightPokeModule,RouterModule.forChild(routes)
  ]
})
export class BattlePokePageModule { }
