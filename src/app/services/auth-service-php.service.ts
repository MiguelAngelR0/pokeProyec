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
      password: password,
    }

    return this.http.post('http://localhost/tfgPokemon/loginPoke.php',body);
  }

}
