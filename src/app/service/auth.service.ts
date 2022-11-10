import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  flagLoading$ = new EventEmitter<boolean>();
  
  apiURL = environment.API_URL;
  token: string = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(data) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      "clave": data.password,
      "usuario": data.username
    };

    return this.http.post( this.apiURL + `seguridad/login`, JSON.stringify(body), {headers} );
  }


  // Guardar token
  async setToken(token : string) {
    this.token = token;
    if (this.token != null) {
      window.localStorage.setItem("token", this.token);
    }
  }

  // obtener token
  async getToken() {
    if (window.localStorage.getItem("token") != null) {
      this.token = window.localStorage.getItem("token");
      return this.token;
    } else {
      return null;
    }
  }

  // validar TOKEN y se guarda Usuario
  async validaToken(): Promise < boolean > {

    await this.getToken(); // Verifica si existe el token en el LocalStorage

    if (!this.token) { // si no existe el token 
      this.router.navigate(['login']);
      return Promise.resolve(false);
    }

    //Si existe el token en el LocalStorage
    return new Promise < boolean > (resolve => {

      if (this.token !== null) {
        resolve(true);
      } else {
        this.router.navigate(['']);
        resolve(false);
      }
    });

  }

  
}
