import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes = [
  {
    path: '', //ruta inicial
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    
    loadChildren: () => import('src/app/components/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule),
  },
 {
    path: '**',
    // pathMatch: 'full',
    redirectTo: 'not-found'
  },
  {
    path: 'not-found',//Si la ryta no coincide con ninguna de estas
    component: NotFoundPageComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
