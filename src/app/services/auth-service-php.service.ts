import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServicePhp {

  constructor(private http:HttpClient) { }

  //login del usuario en ReqRes
  login(email:string, password:string): Observable<any>{
    console.log('este es el email que le paso en AuthServicePhp '+email)

    const body = {
      email:email,
      password: password
    }

    return this.http.post('http://localhost/tfgPokemon/loginPoke.php',body);
  }

  register(nombre:string,email:string, password:string): Observable<any>{

    const body = {
      nombre:nombre,
      email:email,
      password: password
    }


    return this.http.post('http://localhost/tfgPokemon/registerPoke.php',body);
  }

  addPokeFav(id:string, name:string, pic:string,idUser:number){
    
    const body = {
      id:id,
      name:name,
      pic: pic,
      idUser:idUser
    }


    return this.http.post('http://localhost/tfgPokemon/addPokeFav.php',body);
  }

  deletePokeFav(id:string, name:string, pic:string,idUser:number){
    
    const body = {
      id:id,
      name:name,
      pic: pic,
      idUser:idUser
    }


    return this.http.post('http://localhost/tfgPokemon/deletePokeFav.php',body);
  }
  


  getPokeFav(idUser:number){
    
    const body = {
      idUser:idUser,
      
    }

    return this.http.post('http://localhost/tfgPokemon/getPokemonFav.php',body);
  }

  getAllUsers(){
    return this.http.get('http://localhost/tfgPokemon/getAllUsers.php');
  }
  

}
