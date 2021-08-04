import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize, retry } from "rxjs/operators"

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        const hardCodedToken = '12121-123232-sdsda232';
        const reqWithAuth = req.clone({
            setHeaders:{
                Authorization:`Bearer ${hardCodedToken}`
            }
        });

        // return next.handle(reqWithAuth)

        return next.handle(req)
                    .pipe(

                        retry(3),

                        catchError((error:HttpErrorResponse)=>{
                            alert(`Http Error:${req.url}`);
                            return throwError(error)
                        }),

                        //tracing
                        finalize(()=>{
                            const tracingData = `${req.method} "${req.urlWithParams}"`
                            console.log(tracingData)
                        })
                    )

    }
}
