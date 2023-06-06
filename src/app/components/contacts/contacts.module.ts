import { NgModule } from '@angular/core';
import { ContactsComponent } from './contacts.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ChatModule } from '../chat/chat.module';





@NgModule({
    imports: [MatIconModule,MatTooltipModule,CommonModule,MatButtonModule,ChatModule],
    exports: [ContactsComponent],
    declarations: [ContactsComponent],
    providers: [],
})
export class ContactsModule { }
