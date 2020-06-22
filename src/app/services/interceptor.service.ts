import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { EventEmitterService } from './event-emitter.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private eventEmitterService: EventEmitterService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      this.showLoading();
      return next.handle(request).pipe(
        map(event => {
          if (event instanceof HttpResponse) {
            this.hideLoading();
          }
          return event;
        }), tap(null, err => {
          if (err instanceof HttpErrorResponse) {
            this.hideLoading();
          }
        }));
    }
  }

  showLoading() {
    this.eventEmitterService.showLoading();
  }

  hideLoading() {
    this.eventEmitterService.hideLoading();
  }
}
