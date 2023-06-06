import { Component, Input } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  @Input() selectedUser: any | null = null;
  text="";

  //al enter scroll down
 constructor(public chat:ChatService){}

 sendMessage(){
  let messageInfo = {
    text: this.text,
    messageType:1
  };
  this.chat.sendMessage(messageInfo);
  this.text=""
 }
 
 
}
