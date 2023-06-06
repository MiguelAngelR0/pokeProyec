import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FightPokeComponent } from './fight-poke.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [FightPokeComponent],
  imports: [
    CommonModule,MatIconModule,MatButtonModule
  ],exports: [FightPokeComponent]
})
export class FightPokeModule { }
