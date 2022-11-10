import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
})
export class AppLoginComponent {

  dark: boolean = true;
  checked: boolean;

  // Formulario
  forma: FormGroup;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {
    this.crearFormulario();
  }

  // Getters para validar formularios
  get usernameNoValido() {
    return this.forma.get('username').invalid && this.forma.get('username').touched;
  }

  get passwordNoValido() {
    return this.forma.get('password').invalid && this.forma.get('password').touched;
  }

  // Metodo para crear formularios
  crearFormulario() {
    this.forma = this.fb.group({
      username: ['', [Validators.required] ],
      password: ['', [Validators.required] ]
    }
    );
  }

  // Login
  async login() {
    this.router.navigate(['products']);

    if ( this.forma.invalid ) {
      this.messageService.add({ key: 'tst', severity: 'error', summary: 'Campos requeridos', detail: 'Algunos campos no han sido completados correctamente.' });
      return Object.values( this.forma.controls ).forEach( control =>{
  
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAllAsTouched() )
        }
        control.markAsTouched();
      });
    }

    //login
    // await this.auth.login( this.forma.value ).subscribe( (resp: any) => {
    //   if (resp.errorCode) {
    //     this.messageService.add({ key: 'tst', severity: 'error', summary: 'Usuario/Contraseña incorrectos', detail: 'Intente nuevamente ingresar su usuario y contraseña', life: 6000 });
    //     localStorage.clear();
    //     this.forma.reset();
    //   }

    //   if (resp.response) {
    //     this.auth.setToken( resp.response.token );

    //     this.router.navigate(['expediente']);
    //   }

    // }, error => {
    //   console.log(error);
      
    // })

  }

}
