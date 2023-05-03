import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { PokeDetailPageComponent } from './pages/poke-detail-page/poke-detail-page.component';


const routes: Routes = [
  {
    path: '', //ruta inicial
    component: LoginPageComponent
    // pathMatch: 'full',
    // redirectTo: 'dashboard'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path:'',
        component:HomeComponent,
        canActivate: [AuthGuardGuard] // agregado aquí
      },
      {
        path:'pokedex',
        component:PokedexPageComponent,
        canActivate: [AuthGuardGuard] 
      },
      {
        path:'pokedetail/:id',
        component:PokeDetailPageComponent,
        canActivate: [AuthGuardGuard] 
      },

    ]
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
//  {
//     path: '**',
//     redirectTo: 'not-found'
//   },
//   {
//     path: 'not-found',//Si la ryta no coincide con ninguna de estas
//     component: NotFoundPageComponent
//   }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
