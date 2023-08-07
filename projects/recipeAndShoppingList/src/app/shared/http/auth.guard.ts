import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable, take} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.userSubject.pipe(
      take(1),
      map(user => {
        const isAuth: boolean = !!user;
        if (isAuth) {
          return isAuth;
        }
        return this.router.createUrlTree(['/auth']);
      })
    )
  }


}
