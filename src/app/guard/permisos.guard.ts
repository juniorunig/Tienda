import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PermisosGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  async canActivate(): Promise<boolean | UrlTree> {
    const user = await this.auth.getCurrentUser;
    const isAcutenticate = user != null ? true : false;
    if (!isAcutenticate) {
      console.log('no se ha autenticado');

      this.router.navigateByUrl('/login');
    }
    console.log('esta logeado');

    return isAcutenticate;
  }

  hasUser(): boolean {
    return false;
  }
}
