
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoginAuth implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Outgoing HTTP request', request);
    const token = localStorage.getItem('token');

    // Clone the request and add the token to the headers if it exists
    if (token) {
      console.log("Token found, adding to headers");
      const authReq = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      console.log('Request with Auth Header:', authReq); // Debugging line
      return next.handle(authReq).pipe(
        tap((event: HttpEvent<any>) => {
          console.log('Incoming HTTP response', event);
        })
      );
    } else {
      // If there's no token, just pass the original request
      return next.handle(request).pipe(
        tap((event: HttpEvent<any>) => {
          console.log('Incoming HTTP response', event);
        })
      );
    }
  }
}
