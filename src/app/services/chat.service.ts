import { EventEmitter, Injectable } from '@angular/core';

import { SocketWebService } from './socket-web.service';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  io: any; // Asegúrate de ajustar el tipo según la biblioteca que estés utilizando
  // data: Pokemon[] = [];
  chats:[] | any=[] ;

  callBack: EventEmitter <any> = new EventEmitter();


  constructor(private socket:SocketWebService) {
    this.io = io('http://localhost:3000', { query: { nameRoom: 'myRoom' } });
    this.listen(); // Agregar la llamada a este método para activar la escucha de eventos
    this.onReceiveMessage();
   }


  sendMessage(messageInfo:any){
    this.chats.push(messageInfo);
    this.socket.io.emit("sendMessage",messageInfo);
  }

  

  onReceiveMessage(){
    this.socket.io.on("recieveMessage",(messageInfo)=>{
      messageInfo.messageType= 2; // cambiar el tipo de mensaje cuando se recibe
      this.chats.push(messageInfo);
      
    })
  }
  
  listen = () => {
     this.socket.io.on('event', res => this.callBack.emit(res)) //todo lo que escuche sale por call back
  }


  emitEvent = (payload = {}) => { //front envia el evento
    this.socket.io.emit('event', payload)
  }

  sendEvent(event:any){
    
    this.socket.io.emit("event",event);
  }


}
