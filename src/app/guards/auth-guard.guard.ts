import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {


  user:IUser | undefined;

  //recuperar los datos JSON y pasarlos
  ngOnInit(): void {

  }

  constructor(private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

       // Obtener la cadena JSON del almacenamiento sessionStorage
const userStr = sessionStorage.getItem('user');

// Convertir la cadena JSON en un objeto de JavaScript
 this.user = JSON.parse(userStr ?? '');

      console.log("este es el token" + this.user?.token)
  if (this.user?.token) {
    // Si el token existe, el usuario está autenticado
    return true;
  } else {
    // Si el token no existe, redirige al usuario a la página de inicio de sesión
     this.router.navigate(['login']);
     return false;
  }


  }
  
}
