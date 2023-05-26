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


import {MatCardModule} from '@angular/material/card';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';





import { RouterModule } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';

import { ContactsDetailPageComponent } from './pages/contacts-detail-page/contacts-detail-page.component';
import { ContactsDetailComponent } from './components/contacts-detail/contacts-detail.component';



import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS }
 from '@angular/material/form-field';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DrawPageComponent } from './pages/draw-page/draw-page.component';
import { Draw2Component } from './components/draw2/draw2.component';

// import { ContactsModule } from './modules/contacts.module';
 const myMatFormFieldDefaults = {
  floatLabel: 'always',
  appearance: 'fill',
};


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,

  
    RegisterPageComponent,
    RegisterFormComponent,
    NotFoundPageComponent,
   

 
    ContactsDetailComponent,
    
    ContactsDetailPageComponent,
    ContactsDetailComponent,
   
    LoginPageComponent,
    LoginFormComponent,
   
    
   
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
    RouterModule,
    MatChipsModule,
    MatFormFieldModule,
    
   
    // ContactsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
