import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot, UrlTree
} from "@angular/router";
import {Injectable} from "@angular/core";
import {TokenStorageService} from "../services/token-storage.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private tokenStorageService: TokenStorageService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |
        Promise<boolean | UrlTree> | boolean | UrlTree {
        const isAuthenticated = !!this.tokenStorageService.getUser();
        if (isAuthenticated) {
            return true;
        }
        return this.router.createUrlTree(['index']);
    }

}