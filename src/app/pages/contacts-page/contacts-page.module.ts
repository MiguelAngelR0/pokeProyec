import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



import { ContactsPageComponent } from './contacts-page.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

import { ContactsModule } from 'src/app/components/contacts/contacts.module';




const routes: Routes = [
  {
    path: '',
    component: ContactsPageComponent,
  },
];

@NgModule({
  declarations: [ ContactsPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule,ContactsModule], // importa MaterialModule 
  exports: []
})

export class ContactsPageModule { }
