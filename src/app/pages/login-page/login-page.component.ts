import { Component } from '@angular/core';
import { AuthServicePhp } from 'src/app/services/auth-service-php.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./loginWall.component.scss']
})
export class LoginPageComponent {
  
  user: IUser | undefined;


  constructor( private authService: AuthServicePhp,private router: Router){}

  ngOnInit(): void {

    

    //Si ya esta el token logueado carga la home
    const token = sessionStorage.getItem('token');

    if (token) { 
      this.router.navigate(['dashboard']);
    }

  }





  loginUser(value:any):void {

    const {email, password} = value;

    this.authService.login(email, password).subscribe(
      (response) => { //nos susbcribimos a la respuesta, y si todo ha ido bien 
        console.table(response)
        
        this.user = response;
        
        sessionStorage.setItem("user",JSON.stringify(this.user));

        if(response.exito || response.token){ //permite a dashboard acceder sin login al tener ya el login 
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
          
        }else{
          console.log('no esta el usuario ingresado')
        }
       
      },
      (error) => (console.error(`Ha habido un error al hacer login:`, JSON.stringify(error, null, 2)),
        () => console.info(`Peticion de login terminada`)
      ));
    
  }

}
