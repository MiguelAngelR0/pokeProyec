import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});

  @Output() registerAction: EventEmitter<unknown> = new EventEmitter<unknown>();//emitimos el obj

  constructor(private formBuilder: FormBuilder) {
    
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, {validators : this.passwordsMatchValidator});


   }


   passwordsMatchValidator( formGroup: FormGroup){
    
    const password = formGroup.get('password')?.value;

    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      console.log('son distintos')
      return { passwordsNotMatch: true };
    } else {
      console.log('son iguales')
      return null;
    }
  }

  ngOnInit() {
    console.log(this.registerForm)
    
  
  }


  get firstName() {
    return this.registerForm.get('firstName')
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


  submitRegister() {
    console.log(this.registerForm.valid)
    if (this.registerForm.valid) {
      console.table(this.registerForm.value)
      //todo peticion a authService
      this.registerAction.emit(this.registerForm.value);//Este es el valor que va a recibirse como evento en el loginAction

    }
  }






}




