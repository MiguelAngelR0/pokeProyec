import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsDetailComponent } from './contacts-detail.component';



@NgModule({
  declarations: [ContactsDetailComponent],
  imports: [
    CommonModule,
  ],exports:[ContactsDetailComponent]
})
export class ContactsDetailModule { }
