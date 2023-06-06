import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatCardModule,MatFormFieldModule,ReactiveFormsModule,RouterModule,RouterModule.forRoot(routes),MatInputModule,MatButtonModule
  ],
  exports:[
    
  ]
})
export class LoginFormModule { }
