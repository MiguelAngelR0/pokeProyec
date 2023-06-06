import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketWebService {
  //conexion al server
  io = io("http://localhost:3000/",{
    withCredentials:true,
    autoConnect:true
  });

  constructor(){
    



  }






}
