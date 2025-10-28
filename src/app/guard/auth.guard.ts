import {
    CanActivate,
    Router,
    UrlTree
} from "@angular/router";
import {Injectable} from "@angular/core";
import {catchError, Observable, map, of} from "rxjs";
import {UserService} from "../services/user.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private userService: UserService,) {}

    canActivate(): Observable<boolean | UrlTree> {
        return this.userService.me().pipe(
            map(() => true),
            catchError(() => of(this.router.createUrlTree(['index'])))
        );
    }
}