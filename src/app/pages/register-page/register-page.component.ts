import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServicePhp } from 'src/app/services/auth-service-php.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  constructor( private authService: AuthServicePhp,private router: Router){}

  registerUser(value:any):void {


    const {firstName,email, password} = value;

    console.log("Este es el email" + email)

    this.authService.register(firstName,email, password).subscribe(
      (response) => { //nos susbcribimos a la respuesta, y si todo ha ido bien 

        if(response){
          this.router.navigate(['/login']);
        }

      },
      (error) => (console.error(`Ha habido un error al hacer login:`, JSON.stringify(error, null, 2)),
        () => console.info(`Peticion de login terminada`)
      ));
    
  }

}
