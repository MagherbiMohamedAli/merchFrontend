import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStoregService } from '../local-storeg.service';
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class InterInterceptor implements HttpInterceptor{

  constructor(private localStorageService: LocalStoregService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let authReq = req;
      const token = this.localStorageService.getToken();
      if (token != null) {
          authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)});
      }
      return next.handle(authReq);
  }

}

export const authInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: InterInterceptor, multi: true}
];