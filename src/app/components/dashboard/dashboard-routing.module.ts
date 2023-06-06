// app/dashboard/dashboard-routing.module.ts
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'contacts',
        loadChildren: () => import('src/app/pages/contacts-page/contacts-page.module').then(m => m.ContactsPageModule),
      },
      {
        path: 'contactsDetail/:room',
        loadChildren: () => import('src/app/pages/contacts-detail-page/contacts-detail-page.module').then(m => m.ContactsDetailPageModule),
      },
      {
        path: 'pokedex',
        loadChildren: () => import('src/app/pages/pokedex-page/pokedex-page.module').then(m => m.PokedexPageModule),
      },
      {
        path: 'pokedetail/:id',
        loadChildren: () => import('../../pages/poke-detail-page/poke-detail-page.module').then(m => m.PokeDetailPageModule),
      },
      {
        path: 'draw',
        loadChildren: () => import('../../pages/draw-page/draw-page.module').then(m => m.DrawPageModule),
      },
       {
        path: 'battle',
        loadChildren: () => import('../../pages/ruta-page/ruta-page.module').then(m => m.RutaPageModule),
      },
      {//todo hacer que esta se la pantalla donde se acceda atraves del id del pokemon al que selecciones en la ruta
        path: 'battle/:id/:idE/:modo',
        loadChildren: () => import('../../pages/battle-poke-page/battle-poke-page.module').then(m => m.BattlePokePageModule),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),MatTooltipModule],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
