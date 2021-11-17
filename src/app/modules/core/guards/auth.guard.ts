import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private alertify: AlertifyService) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    const roles = next.firstChild!.data['roles'] as Array<string>;
    if (roles) {
      const match = AuthService.roleMatch(roles);
      if (match) {
        return true;
      } else {
     
        this.router.navigate(['']);
        this.alertify.error('No esta autorizado para ingresar a esta area');
      }
    }
    if (AuthService.loggedIn()) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}
