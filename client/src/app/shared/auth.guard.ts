import {Injectable} from '@angular/core';

// import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router
} from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('auth_data')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}
