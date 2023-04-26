import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:IUser | undefined;

  //recuperar los datos JSON y pasarlos
  ngOnInit(): void {

 // Obtener la cadena JSON del almacenamiento sessionStorage
const userStr = sessionStorage.getItem('user');

// Convertir la cadena JSON en un objeto de JavaScript
 this.user = JSON.parse(userStr ?? '');



  }




}
