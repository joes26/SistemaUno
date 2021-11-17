import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { Constants } from '../common/constants';
import { ToastUtil } from '../common/toast.util';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private alertify: AlertifyService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authAppToken: { value: '' };
    authAppToken = JSON.parse(localStorage.getItem(Constants.Core.Usuario.Token)!);

    if (authAppToken != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authAppToken.value}`
        }
      });
    }


    return next.handle(request).pipe(tap((data: any) => {

      if (data.body !== undefined && data.body !== null) {
        if (data.body.status < 0) {
          //debugger;
          ToastUtil.technicalError('', 'Se produjo un error técnico <br/><br/> <b>Código: </b> <br/>' + data.body.transactionId);
        }


      }
    },
      (err: any) => {

        
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 400:
              ToastUtil.show('error', 'Se produjo un error al enviar la información');
              break;
            case 401:
              AuthService.logout();
              this.router.navigate(['']);
              break;
            case 404:
              ToastUtil.show('error', 'No se encontró el servicio');
              break;
            case 500:
              ToastUtil.show('error', 'Se produjo un error al invocar el servicio');
              break;
            default:
              ToastUtil.show('error', 'El servicio no se encuentra disponible');
              break;
          }
        }
      }));
  }
}
