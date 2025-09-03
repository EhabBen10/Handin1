import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Observable } from "rxjs";

export function authInterceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
    const authService = inject(AuthService);

    if (req.url.includes('/auth/login')) return next(req);

    const accessToken = authService.getAccessToken();
    const authed = accessToken ? req.clone({
        setHeaders: {
            Authorization: `Bearer ${accessToken}`
        }
    }) : req;
    return next(authed);
}