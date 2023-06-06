import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormModule } from 'src/app/components/login-form/login-form.module';
import { LoginPageComponent } from './login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PokedexModule } from 'src/app/components/pokedex/pokedex.module';
import { ChatModule } from 'src/app/components/chat/chat.module';


const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,LoginFormModule, RouterModule.forChild(routes)
  ],exports:[RouterModule]
})
export class LoginPageModule { }
