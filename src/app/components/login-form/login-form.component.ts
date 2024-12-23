
import { Component, OnInit,Output,EventEmitter } from '@angular/core';

//importamos lo necesario para construir el formulario
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { AuthServicePhp } from 'src/app/services/auth-service-php.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({})//se trata al login como un objeto

  @Output() loginAction: EventEmitter<unknown> = new EventEmitter<unknown>();//emitimos el obj. 

  constructor(private formBuilder: FormBuilder, private authService: AuthServicePhp) {}

  ngOnInit(): void {

    this.loginForm=this.formBuilder.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password: ['', Validators.required]
    });
    
  }
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }
  submitLogin(){
    if(this.loginForm.valid){
      this.loginAction.emit(this.loginForm.value);//Este es el valor que va a recibirse como evento en el loginAction
      this.authService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(
        (response) => {
          console.log("respuesta del login: ", response)
        },
        (error) => {
          // hacer algo con el error del servicio si es necesario
          console.error("error login" , error)
        }
      );
     
    }
  }

}
