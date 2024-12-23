import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [PokedexComponent],
  imports: [
    CommonModule,MatFormFieldModule,MatIconModule, MatTooltipModule,MatTableModule,MatSortModule,MatPaginatorModule,MatButtonModule,MatInputModule
  ],exports:[PokedexComponent]
})
export class PokedexModule { }
