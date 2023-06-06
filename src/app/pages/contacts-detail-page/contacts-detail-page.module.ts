import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ContactsDetailModule } from 'src/app/components/contacts-detail/contacts-detail.module';
import { ContactsDetailPageComponent } from './contacts-detail-page.component';



const routes: Routes = [
  {
    path: '',
    component: ContactsDetailPageComponent,
  },
];



@NgModule({
  declarations: [ContactsDetailPageComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),ContactsDetailModule
  ]
})
export class ContactsDetailPageModule { }
