
import { Component, OnInit,Output,EventEmitter } from '@angular/core';

//importamos lo necesario para construir el formulario
import { FormGroup, FormBuilder,Validators, NgForm } from '@angular/forms';
import { AuthServicePhp } from 'src/app/services/auth-service-php.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  

  loginForm: FormGroup = new FormGroup({})//se trata al login como un obj

  @Output() loginAction: EventEmitter<unknown> = new EventEmitter<unknown>();//emitimos el obj=los valores de nuestro formulario ponia any envez de unkown

  constructor(private formBuilder: FormBuilder, private authService: AuthServicePhp) {}

  ngOnInit(): void {

    this.loginForm=this.formBuilder.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password: ['', Validators.required]
    });
    
    if(sessionStorage.getItem('token')){

    }

  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }


  submitLogin(){
    console.log(this.loginForm.valid)
    
    if(this.loginForm.valid){
      console.table(this.loginForm.value)
      
      //todo peticion a authService
      this.loginAction.emit(this.loginForm.value);//Este es el valor que va a recibirse como evento en el loginAction

      this.authService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(
        (response) => {
          
        },
        (error) => {
          // hacer algo con el error del servicio si es necesario
        }
      );
     
    }
  }

}
