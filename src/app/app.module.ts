import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {MatCardModule} from '@angular/material/card';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';

import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { PokeDetailPageComponent } from './pages/poke-detail-page/poke-detail-page.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    HomeComponent,
    LoginFormComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    NotFoundPageComponent,
    PokedexComponent,
    PokedexPageComponent,
    PokeDetailPageComponent,
    PokeDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule,
    MatChipsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
