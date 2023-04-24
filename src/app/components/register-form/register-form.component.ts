import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});

  @Output() loginAction: EventEmitter<unknown> = new EventEmitter<unknown>();//emitimos el obj=los valores de nuestro formulario ponia any envez de unkown

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }


  get firstName() {
    return this.registerForm.get('email')
  }

  get password() {
    return this.registerForm.get('password')
  }

  get email() {
    return this.registerForm.get('email')
  }

  get confirmPassword() {
    return this.registerForm.get('password')
  }


  submitLogin(){
    console.log(this.registerForm.valid)
    if(this.registerForm.valid){
      console.table(this.registerForm.value)
      //todo peticion a authService
      this.loginAction.emit(this.registerForm.value);//Este es el valor que va a recibirse como evento en el loginAction
     
    }
  }
  

  //todo que funcione el confirmar
  // matchValidator(field: string) {
  //   //La clase AbstractControl proporciona una serie de métodos y propiedades comunes a los controles de formulario, como value, setValue(), patchValue(), reset(), markAsTouched(), markAsDirty(), y más.
  //   //Estos métodos y propiedades se pueden utilizar en cualquier tipo de control de formulario, 
  //   //independientemente de si es un control individual o un grupo de controles.
  //   return (control: AbstractControl) => {
  //     const fieldValue = control.value;
  //     const matchingControl = control.root.get(field);

  //     if (matchingControl && fieldValue !== matchingControl.value) {
  //       return { match: true };
  //     }

  //     return null;
  //   };
  // }

  // function MustMatch(arg0: string, arg1: string): any {
  //   throw new Error('Function not implemented.');
  // }
  



}




