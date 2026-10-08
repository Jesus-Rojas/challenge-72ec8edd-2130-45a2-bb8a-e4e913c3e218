import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest'
}

export interface User {
  id: string;
  username: string;
  role: UserRole;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _isAuthenticated = signal<boolean>(false);
  private readonly _user = signal<User | null>(null);

  constructor(private router: Router) {}

  get isAuthenticated(): Observable<boolean> {
    return of(this._isAuthenticated());
  }

  get user(): Observable<User | null> {
    return of(this._user());
  }

  get currentUser(): User | null {
    return this._user();
  }

  login(username: string, password: string): Observable<boolean> {
    // Simulación de autenticación con datos hardcodeados para el ejercicio
    if (username === 'admin' && password === 'admin123') {
      this._isAuthenticated.set(true);
      this._user.set({
        id: '1',
        username: 'admin',
        role: UserRole.ADMIN
      });
      return of(true);
    } else if (username === 'user' && password === 'user123') {
      this._isAuthenticated.set(true);
      this._user.set({
        id: '2',
        username: 'user',
        role: UserRole.USER
      });
      return of(true);
    } else {
      this._isAuthenticated.set(false);
      this._user.set(null);
      return of(false);
    }
  }

  logout(): void {
    this._isAuthenticated.set(false);
    this._user.set(null);
    this.router.navigate(['/login']);
  }

  checkAuthentication(): Observable<boolean> {
    // En un entorno real, esto haría una llamada al backend
    return this.isAuthenticated;
  }

  checkRole(role: UserRole): Observable<boolean> {
    return of(this._user()?.role === role);
  }
}