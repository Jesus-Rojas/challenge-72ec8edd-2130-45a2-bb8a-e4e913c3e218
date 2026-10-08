import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, UserRole } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // TODO: Implementar la lógica para verificar si el usuario tiene el rol requerido.
    // Extraer el rol requerido desde los datos de la ruta (next.data.requiredRole).
    // Usar el método checkRole(role) del AuthService para verificar el rol.
    // Si el usuario tiene el rol, permitir el acceso a la ruta.
    // Si no tiene el rol, redirigir a una página de acceso denegado o a la página de inicio.
    // Retornar un Observable<boolean | UrlTree> para manejar la asincronía.
    const requiredRole = next.data['requiredRole'] as UserRole;
    return this.authService.checkRole(requiredRole).pipe(
      map(hasRole => {
        if (hasRole) {
          return true;
        } else {
          return this.router.createUrlTree(['/access-denied']);
        }
      })
    );
  }
}