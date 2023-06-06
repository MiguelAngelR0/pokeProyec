import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutaComponent } from './ruta.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [RutaComponent],
  imports: [
    CommonModule,MatIconModule,MatButtonModule
  ],exports:[RutaComponent]
})
export class RutaModule { }
