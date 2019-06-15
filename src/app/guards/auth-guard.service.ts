import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { Observable } from 'rxjs';

import { UserService } from '../shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  private isAuthenticated: boolean;

  constructor(private userService: UserService, private router: Router) {
    this.userService.userIsAuthenticated.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuthenticated) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
