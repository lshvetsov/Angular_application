import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";

export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Request")
    console.log(req.headers.keys())
    return next.handle(req).pipe(tap(event => {
      if (event.type === HttpEventType.Response) {
        console.log("Response");
        console.log(event.body);
      }
    }))
  }

}
