import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private confirmationService: ConfirmationService,
    private router: Router,
    private authService: AuthService
  ) { }

  token: string = null;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    // Verificando que exista Token
    if (window.localStorage.getItem("token") != null) {
      this.token = window.localStorage.getItem("token");
    } else {
      localStorage.clear();
      this.router.navigate(['login']);
    }

    // Agregando cabeceras
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

    const headersUploader = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
 

    let reqClone = req.clone({ headers });

    return next.handle( reqClone ).pipe(
      tap( data => {

      }),
      catchError( error => {
        this.authService.flagLoading$.emit(false);  
        if (error.status === 401) {
        
          this.confirmationService.confirm({
            key: 'sesionDialog',
            message: 'La sesión caduca periódicamente para mantener la seguridad. Se regresará al inicio de sesión y vuelva a ingresar sus credenciales.',
            accept: () => {
                localStorage.clear();
                this.router.navigate(['login']);
            }
          });
        }

        return throwError(error);

      })

    );
  }

}
