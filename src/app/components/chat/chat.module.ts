import { NgModule } from '@angular/core';

import { ChatComponent } from './chat.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [CommonModule,FormsModule,MatIconModule,MatButtonModule],

    exports: [ChatComponent],
    declarations:  [ChatComponent],
    providers: [],
})
export class ChatModule { }
