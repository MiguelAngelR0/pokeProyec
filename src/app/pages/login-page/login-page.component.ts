import { Component } from '@angular/core';
import { AuthServicePhp } from 'src/app/services/auth-service-php.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./loginWall.component.scss']
})
export class LoginPageComponent {


  constructor( private authService: AuthServicePhp,private router: Router){}

  ngOnInit(): void {

    const token = sessionStorage.getItem('token');

    if (token) { //Si ya esta el token logueado carga la home
      this.router.navigate(['home']);
    }

  }





  loginUser(value:any):void {

    const {email, password} = value;

    console.log('esto me llega del componente hijo login form: '+ value.email)
    console.log('esto me llega del componente hijo login form: '+ value.password)



    this.authService.login(email, password).subscribe(
      (response) => { //nos susbcribimos a la respuesta, y si todo ha ido bien 
        console.table(response)
        console.log("Esta es la respuesta Mensaje " + response.mensaje)
        console.log("Esta es la respuesta Array: " + response.otroValor)
        console.log("Esta el usu?: "+ response.exito)


        if(response.token){
          sessionStorage.setItem('token', response.token);
          console.log("tengo respuesta")
          // this.router.navigate(['/dashboard'])
        }
      },
      (error) => (console.error(`Ha habido un error al hacer login:`, JSON.stringify(error, null, 2)),
        () => console.info(`Peticion de login terminada`)
      ));
    
  }

}
