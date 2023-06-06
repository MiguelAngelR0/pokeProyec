import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


import { IUser } from 'src/app/models/user.interface';
import { AuthServicePhp } from 'src/app/services/auth-service-php.service';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})



export class ContactsComponent implements OnInit {
  public users: any = [];
  public selectedUser: any | null = null;
  user!:IUser

  @Input() selectedUserChat: EventEmitter<IUser> = new EventEmitter<IUser> //emite cual es la tarea que se debe borrar
 

  constructor(private userService: AuthServicePhp,private router:Router) {

  }

  ngOnInit(): void {

    this.userService.getAllUsers()
      .subscribe(users => {
        
        console.log("Usuarios que me llegan del servicio " +users)
        console.table(users)
        this.users = users;
        
      })


  }

  public selectUser(user: any): void {
    this.selectedUser = user;
    this.selectedUserChat.emit(this.selectedUser); //Notificamos al componente superior la tarea a eliminar
  }

  detalleContacto(user:IUser){
    console.log(user.id)
    this.router.navigateByUrl(`/dashboard/contactsDetail/${user.id}`);
    
  }

  
  
  
}
