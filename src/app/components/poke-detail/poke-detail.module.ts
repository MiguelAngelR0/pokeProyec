import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeDetailComponent } from './poke-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';




@NgModule({
  declarations: [PokeDetailComponent],
  imports: [
    CommonModule,MatCardModule,MatChipsModule
  ],exports:[
    PokeDetailComponent
  ]
})
export class PokeDetailModule { }
