import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.isLoggedIn()) {
      let authRequest = request.clone({
        setHeaders: {
          Atuhorization: 'Bearer ' + this.authService.getToken(),
        },
      });
      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}
